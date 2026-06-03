'use client'
import { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Clock3, Menu, X } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'What we audit', href: '#audit' },
  { label: 'About', href: '#about' },
]

export default function Nav() {
  const navRef = useRef<HTMLElement>(null)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -64,
      opacity: 0,
      duration: 0.7,
      ease: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      delay: 0.1,
    })
  }, { scope: navRef })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'background-color 300ms ease, backdrop-filter 300ms ease, border-color 300ms ease',
          backgroundColor: scrolled ? 'rgba(251, 247, 238, 0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(232, 223, 210, 0.8)' : '1px solid transparent',
        }}
      >
        <div className="gbt-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          {/* Logo */}
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
            <div style={{
              width: 32, height: 32,
              borderRadius: '50%',
              background: 'var(--gbt-brand-amber)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Clock3 size={16} color="#fff" strokeWidth={1.75} />
            </div>
            <span style={{ fontFamily: 'var(--font-newsreader)', fontSize: '1.125rem', fontWeight: 400, color: scrolled ? 'var(--gbt-ink)' : '#fff', letterSpacing: '-0.01em', transition: 'color 300ms ease' }}>
              GetBackTime
            </span>
          </a>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleAnchor(e, l.href)}
                style={{
                  fontFamily: 'var(--font-hanken)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: scrolled ? 'var(--gbt-ink-muted)' : 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  transition: 'color 180ms ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = scrolled ? 'var(--gbt-ink)' : '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = scrolled ? 'var(--gbt-ink-muted)' : 'rgba(255,255,255,0.7)')}
              >
                {l.label}
              </a>
            ))}
            <a
              href="/contact"
              onClick={undefined}
              className="gbt-btn gbt-btn-primary"
              style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}
            >
              Book Assessment
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: scrolled ? 'var(--gbt-ink)' : '#fff', padding: '0.25rem' }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', top: 64, left: 0, right: 0, zIndex: 99,
          background: 'rgba(251,247,238,0.98)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--gbt-hairline)',
          padding: '1.5rem 2rem',
          display: 'flex', flexDirection: 'column', gap: '1.25rem',
        }}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleAnchor(e, l.href)}
              style={{ fontFamily: 'var(--font-hanken)', fontWeight: 500, color: 'var(--gbt-ink)', textDecoration: 'none', fontSize: '1rem' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/contact"
            className="gbt-btn gbt-btn-primary"
            style={{ textAlign: 'center' }}
          >
            Book Assessment
          </a>
        </div>
      )}
    </>
  )
}
