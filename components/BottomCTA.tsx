'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function BottomCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const btnRef = useRef<HTMLAnchorElement>(null)

  useGSAP(() => {
    const ease = 'cubic-bezier(0.2, 0.8, 0.2, 1)'

    const tl = gsap.timeline({
      scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
    })

    tl.from('.bcta-eyebrow', { opacity: 0, y: 16, duration: 0.55, ease })
      .from('.bcta-headline', { opacity: 0, y: 28, duration: 0.7, ease }, '-=0.35')
      .from('.bcta-sub', { opacity: 0, y: 20, duration: 0.6, ease }, '-=0.45')
      .from('.bcta-btn', { opacity: 0, y: 16, duration: 0.5, stagger: 0.1, ease }, '-=0.35')
  }, { scope: sectionRef })

  // Magnetic button effect
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = btnRef.current
    if (!btn) return
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const dist = Math.sqrt(x * x + y * y)
    const maxDist = 80
    if (dist < maxDist) {
      const strength = (maxDist - dist) / maxDist
      gsap.to(btn, { x: x * 0.28 * strength, y: y * 0.28 * strength, duration: 0.4, ease: 'power2.out' })
    }
  }

  const handleMouseLeave = () => {
    gsap.to(btnRef.current, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' })
  }

  return (
    <section
      id="book"
      ref={sectionRef}
      className="bcta-section"
      style={{
        background: 'var(--gbt-dusk)',
        padding: '8rem 0 9rem',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(217, 119, 66, 0.14) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div className="noise-overlay" />

      {/* Decorative clock arc */}
      <svg
        width="500" height="500" viewBox="0 0 200 200"
        style={{ position: 'absolute', left: '-80px', bottom: '-80px', opacity: 0.04, pointerEvents: 'none' }}
        aria-hidden
      >
        <circle cx="100" cy="100" r="88" stroke="#D97742" strokeWidth="1.5" fill="none" />
        <line x1="100" y1="100" x2="100" y2="25" stroke="#D97742" strokeWidth="2" strokeLinecap="round" />
        <line x1="100" y1="100" x2="145" y2="100" stroke="#D97742" strokeWidth="1.5" strokeLinecap="round" />
      </svg>

      <div className="gbt-container" style={{ position: 'relative', zIndex: 1 }}>
        <p className="bcta-eyebrow gbt-eyebrow gbt-eyebrow-amber" style={{ marginBottom: '1.5rem' }}>
          Ready to get your time back?
        </p>
        <h2 className="bcta-headline gbt-display gbt-h2" style={{ color: '#fff', marginBottom: '1.25rem', maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
          One conversation to see what your week could look like.
        </h2>
        <p className="bcta-sub" style={{
          fontFamily: 'var(--font-hanken)',
          fontSize: '1.0625rem',
          color: 'rgba(255,255,255,0.6)',
          lineHeight: 1.65,
          maxWidth: 480,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '2.75rem',
        }}>
          Free for the first hour. No commitment. We'll tell you honestly what's worth automating — even if the answer is "not much yet."
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            ref={btnRef}
            href="/contact"
            className="bcta-btn gbt-btn gbt-btn-primary"
            style={{ fontSize: '1.0625rem', padding: '1rem 2.25rem', boxShadow: 'var(--gbt-shadow-amber)' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            Book Assessment
            <ArrowRight size={17} strokeWidth={2} />
          </a>
          <a
            href="mailto:hello@getbacktime.co"
            className="bcta-btn gbt-btn gbt-btn-ghost-dark"
            style={{ fontSize: '1.0625rem', padding: '1rem 1.75rem' }}
          >
            Or just email us
          </a>
        </div>

        <p style={{
          fontFamily: 'var(--font-hanken)',
          fontSize: '0.8125rem',
          color: 'rgba(255,255,255,0.3)',
          marginTop: '2rem',
        }}>
          Typically responds within one business day.
        </p>
      </div>
    </section>
  )
}
