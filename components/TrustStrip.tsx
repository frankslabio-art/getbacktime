'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const companies = [
  'Chen Consulting',
  'Osei Property Mgmt',
  'Kowalski & Co',
  'Finch Studio',
  'Radius Advisory',
  'Mako Bookkeeping',
  'Thorngate Legal',
  'Birch & Shore',
]

export default function TrustStrip() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.trust-label', {
      opacity: 0,
      y: 12,
      duration: 0.6,
      ease: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      scrollTrigger: { trigger: ref.current, start: 'top 85%' },
    })
    gsap.from('.trust-marquee-wrap', {
      opacity: 0,
      duration: 0.8,
      delay: 0.25,
      scrollTrigger: { trigger: ref.current, start: 'top 85%' },
    })
  }, { scope: ref })

  const doubled = [...companies, ...companies]

  return (
    <div
      ref={ref}
      style={{
        background: '#fff',
        borderTop: '1px solid var(--gbt-hairline)',
        borderBottom: '1px solid var(--gbt-hairline)',
        padding: '2.25rem 0',
        overflow: 'hidden',
      }}
    >
      <p
        className="trust-label gbt-eyebrow"
        style={{ textAlign: 'center', marginBottom: '1.5rem' }}
      >
        Used by founders, consultants, and small teams
      </p>

      <div className="trust-marquee-wrap" style={{ overflow: 'hidden', position: 'relative' }}>
        {/* Fade masks */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 120,
          background: 'linear-gradient(to right, #fff, transparent)',
          zIndex: 1, pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: 120,
          background: 'linear-gradient(to left, #fff, transparent)',
          zIndex: 1, pointerEvents: 'none',
        }} />

        <div className="gbt-marquee-track">
          {doubled.map((name, i) => (
            <span
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '2.5rem',
                padding: '0 2.5rem',
                fontFamily: 'var(--font-hanken)',
                fontSize: '0.9rem',
                fontWeight: 500,
                color: 'var(--gbt-ink-muted)',
                whiteSpace: 'nowrap',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: 'var(--gbt-brand-amber)',
                  opacity: 0.5,
                  marginRight: '0.75rem',
                  flexShrink: 0,
                }}
              />
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
