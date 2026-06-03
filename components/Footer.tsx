'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Clock3, Mail, Twitter } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const links = {
  Navigate: [
    { label: 'How it works', href: '/#how-it-works' },
    { label: 'What we audit', href: '/#audit' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const ease = 'cubic-bezier(0.2, 0.8, 0.2, 1)'

    gsap.from('.footer-logo', {
      opacity: 0, y: 24, duration: 0.65, ease,
      scrollTrigger: { trigger: footerRef.current, start: 'top 90%' },
    })

    gsap.from('.footer-col', {
      opacity: 0,
      y: 32,
      duration: 0.65,
      stagger: 0.1,
      ease,
      scrollTrigger: { trigger: '.footer-grid', start: 'top 90%' },
    })

    gsap.from('.footer-bottom', {
      opacity: 0, duration: 0.6, delay: 0.4,
      scrollTrigger: { trigger: footerRef.current, start: 'top 88%' },
    })
  }, { scope: footerRef })

  const linkStyle: React.CSSProperties = {
    fontFamily: 'var(--font-hanken)',
    fontSize: '0.875rem',
    color: 'rgba(255,255,255,0.45)',
    textDecoration: 'none',
    display: 'block',
    padding: '0.3rem 0',
    transition: 'color 180ms ease',
  }

  return (
    <footer
      ref={footerRef}
      style={{ background: 'var(--gbt-dusk)', padding: '6rem 0 3rem', position: 'relative', overflow: 'hidden' }}
    >
      <div className="noise-overlay" />

      <div className="gbt-container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Top grid */}
        <div
          className="footer-grid"
          style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '4rem' }}
        >
          <style>{`@media(max-width:768px){.footer-grid{grid-template-columns:1fr 1fr}}`}</style>
          <style>{`@media(max-width:480px){.footer-grid{grid-template-columns:1fr}}`}</style>

          {/* Brand col */}
          <div className="footer-col footer-logo">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%',
                background: 'var(--gbt-brand-amber)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Clock3 size={16} color="#fff" strokeWidth={1.75} />
              </div>
              <span style={{ fontFamily: 'var(--font-newsreader)', fontSize: '1.125rem', color: '#fff', fontWeight: 400 }}>
                GetBackTime
              </span>
            </div>
            <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, maxWidth: 280, marginBottom: '1.75rem' }}>
              Operational audits and automation for small business owners who want their time back — without becoming a tech person.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href="mailto:hello@getbacktime.co"
                style={{ width: 34, height: 34, borderRadius: '50%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'background 180ms ease' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
              >
                <Mail size={15} color="rgba(255,255,255,0.5)" strokeWidth={1.75} />
              </a>
              <a
                href="https://twitter.com"
                style={{ width: 34, height: 34, borderRadius: '50%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'background 180ms ease' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
              >
                <Twitter size={15} color="rgba(255,255,255,0.5)" strokeWidth={1.75} />
              </a>
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading} className="footer-col">
              <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '1rem' }}>
                {heading}
              </p>
              {items.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  style={linkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                >
                  {label}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2rem' }} className="footer-bottom">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.25)' }}>
              © {new Date().getFullYear()} GetBackTime. All rights reserved.
            </p>
            <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.2)', fontStyle: 'italic' }}>
              Calm, advisory, time-respecting.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
