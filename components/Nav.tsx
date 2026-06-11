'use client'
import { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Clock3, Menu, X } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const navLinks = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'What we audit', href: '/#audit' },
  { label: 'About', href: '/#about' },
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
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hash = href.includes('#') ? `#${href.split('#')[1]}` : ''

    // On the homepage, keep the smooth in-page scroll. From /contact or any
    // other page, let the browser navigate back to the homepage section.
    if (hash && window.location.pathname === '/') {
      e.preventDefault()
      setOpen(false)
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
      return
    }

    setOpen(false)
  }

  const navTextColor = scrolled ? 'var(--gbt-ink)' : '#fff'
  const navMutedColor = scrolled ? 'var(--gbt-ink-muted)' : 'rgba(255,255,255,0.74)'

  return (
    <>
      <nav
        ref={navRef}
        aria-label="Primary navigation"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'background-color 300ms ease, backdrop-filter 300ms ease, border-color 300ms ease',
          backgroundColor: scrolled || open ? 'rgba(251, 247, 238, 0.92)' : 'transparent',
          backdropFilter: scrolled || open ? 'blur(12px)' : 'none',
          borderBottom: scrolled || open ? '1px solid rgba(232, 223, 210, 0.8)' : '1px solid transparent',
        }}
      >
        <div className="gbt-container gbt-nav-inner">
          <a href="/" className="gbt-nav-logo" aria-label="GetBackTime home">
            <div className="gbt-nav-mark">
              <Clock3 size={16} color="#fff" strokeWidth={1.75} />
            </div>
            <span
              className="gbt-nav-wordmark"
              style={{ color: scrolled || open ? 'var(--gbt-ink)' : '#fff' }}
            >
              GetBackTime
            </span>
          </a>

          <div className="gbt-nav-links">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleAnchor(e, l.href)}
                style={{ color: navMutedColor }}
                onMouseEnter={e => (e.currentTarget.style.color = navTextColor)}
                onMouseLeave={e => (e.currentTarget.style.color = navMutedColor)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="/contact"
              className="gbt-btn gbt-btn-primary"
              style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}
            >
              Book Assessment
            </a>
          </div>

          <button
            className="gbt-nav-menu-button"
            type="button"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            style={{ color: scrolled || open ? 'var(--gbt-ink)' : '#fff' }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="gbt-mobile-menu">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleAnchor(e, l.href)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/contact"
            className="gbt-btn gbt-btn-primary"
            onClick={() => setOpen(false)}
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Book Assessment
          </a>
        </div>
      )}
    </>
  )
}
