'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const testimonials = [
  {
    quote: "I thought I'd need to hire someone. Turns out three workflows were doing the work of half a position.",
    name: 'Maria Chen',
    role: 'Principal, Chen Consulting',
    hrs: '11 hrs/wk recovered',
  },
  {
    quote: "They found six things I didn't know could be automated. Five of them now run on their own.",
    name: 'Derek Osei',
    role: 'Owner, Osei Property Management',
    hrs: '8 hrs/wk recovered',
  },
  {
    quote: "The audit report felt like someone had been reading my emails for a year. They were right about everything.",
    name: 'Sarah Kowalski',
    role: 'Founder, Kowalski & Co',
    hrs: '6 hrs/wk recovered',
  },
  {
    quote: "I kept saying I'd sort out my invoicing system. They did it in two days. I haven't chased a payment since.",
    name: 'James Finch',
    role: 'Director, Finch Studio',
    hrs: '4 hrs/wk recovered',
  },
  {
    quote: "We do a lot of the same thing every Tuesday. Now we don't. That's the whole story.",
    name: 'Priya Nair',
    role: 'Partner, Radius Advisory',
    hrs: '9 hrs/wk recovered',
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const ease = 'cubic-bezier(0.2, 0.8, 0.2, 1)'

    gsap.from('.testimonials-header', {
      opacity: 0, y: 24, duration: 0.65, ease,
      scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
    })

    gsap.from('.testimonial-card', {
      opacity: 0,
      y: 50,
      duration: 0.75,
      stagger: 0.12,
      ease,
      scrollTrigger: { trigger: '.testimonials-grid', start: 'top 80%' },
    })

    // Big quote mark animations
    gsap.from('.quote-mark', {
      opacity: 0,
      scale: 0.5,
      duration: 0.6,
      stagger: 0.12,
      ease: 'back.out(1.4)',
      scrollTrigger: { trigger: '.testimonials-grid', start: 'top 80%' },
    })
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      className="mob-pad"
      style={{ background: '#fff', padding: '7rem 0 8rem', borderTop: '1px solid var(--gbt-hairline)' }}
    >
      <div className="gbt-container">
        <div className="testimonials-header" style={{ maxWidth: 480, marginBottom: '4rem' }}>
          <p className="gbt-eyebrow" style={{ marginBottom: '1rem' }}>What people say</p>
          <h2 className="gbt-display gbt-h2" style={{ color: 'var(--gbt-ink)' }}>
            In their words, not ours.
          </h2>
        </div>

        <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {testimonials.map(({ quote, name, role, hrs }) => (
            <div
              key={name}
              className="testimonial-card gbt-card"
              style={{ padding: '1.75rem 1.75rem 1.5rem', background: '#fff', position: 'relative', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
              onMouseEnter={e => gsap.to(e.currentTarget, { y: -3, boxShadow: '0 8px 32px rgba(30,26,22,0.09)', duration: 0.25 })}
              onMouseLeave={e => gsap.to(e.currentTarget, { y: 0, boxShadow: 'none', duration: 0.35 })}
            >
              {/* Large quote mark */}
              <div
                className="quote-mark"
                style={{
                  fontFamily: 'var(--font-newsreader)',
                  fontSize: '4rem',
                  lineHeight: 1,
                  color: 'var(--gbt-brand-amber)',
                  opacity: 0.2,
                  position: 'absolute',
                  top: '1rem',
                  right: '1.5rem',
                  userSelect: 'none',
                }}
                aria-hidden
              >
                "
              </div>

              <p style={{
                fontFamily: 'var(--font-newsreader)',
                fontSize: '1.0625rem',
                fontWeight: 400,
                lineHeight: 1.65,
                color: 'var(--gbt-ink)',
                fontStyle: 'italic',
              }}>
                "{quote}"
              </p>

              <div style={{ marginTop: 'auto' }}>
                <hr className="gbt-divider" style={{ marginBottom: '1rem' }} />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <div>
                    <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '0.875rem', fontWeight: 500, color: 'var(--gbt-ink)' }}>{name}</p>
                    <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '0.8125rem', color: 'var(--gbt-ink-muted)' }}>{role}</p>
                  </div>
                  <span className="gbt-badge gbt-badge-sage" style={{ fontSize: '0.75rem', whiteSpace: 'nowrap' }}>
                    {hrs}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
