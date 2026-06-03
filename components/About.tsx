'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const pillars = [
  {
    label: 'Audit first',
    body: 'We study how your week actually runs before recommending anything. No assumptions.',
  },
  {
    label: 'Honest by default',
    body: "If automation won't save you time, we'll tell you. We'd rather lose the work than waste yours.",
  },
  {
    label: 'ROI only',
    body: 'Every recommendation comes with a real estimate of hours saved — not a vague "efficiency gain."',
  },
  {
    label: 'Built for SMBs',
    body: 'No enterprise complexity. No dev team required. Just practical systems you can actually maintain.',
  },
]

const clients = ['Coaches', 'Agencies', 'Contractors', 'Real estate', 'Med spas', 'Consultants', 'Law firms']

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const ease = 'cubic-bezier(0.2, 0.8, 0.2, 1)'

    gsap.from('.about-left', {
      opacity: 0, x: -30, duration: 0.8, ease,
      scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
    })
    gsap.from('.about-pillar', {
      opacity: 0, y: 32, duration: 0.7, stagger: 0.12, ease,
      scrollTrigger: { trigger: '.about-pillars', start: 'top 80%' },
    })
    gsap.from('.about-clients', {
      opacity: 0, y: 20, duration: 0.6, ease,
      scrollTrigger: { trigger: '.about-clients', start: 'top 88%' },
    })
  }, { scope: sectionRef })

  return (
    <section
      id="about"
      ref={sectionRef}
      className="mob-pad"
      style={{ background: 'var(--gbt-dusk)', padding: '7rem 0 8rem', position: 'relative', overflow: 'hidden' }}
    >
      <div className="noise-overlay" />
      <div style={{
        position: 'absolute',
        top: 0, left: '25%', right: '25%', height: '45%',
        background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(217,119,66,0.09) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="gbt-container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}
          className="about-two-col"
        >
          <style>{`@media(max-width:860px){.about-two-col{grid-template-columns:1fr}}`}</style>

          {/* Left — who we are */}
          <div className="about-left">
            <p className="gbt-eyebrow gbt-eyebrow-amber" style={{ marginBottom: '1.25rem' }}>About us</p>
            <h2 className="gbt-display gbt-h2" style={{ color: '#fff', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              We're not here to sell you software.
            </h2>
            <p style={{
              fontFamily: 'var(--font-hanken)',
              fontSize: '1rem',
              lineHeight: 1.7,
              color: 'var(--gbt-on-dark-muted)',
              marginBottom: '1.25rem',
            }}>
              GetBackTime exists for one reason: small business owners are losing hours every week to work that shouldn't be manual. We find that work, and we fix it.
            </p>
            <p style={{
              fontFamily: 'var(--font-hanken)',
              fontSize: '1rem',
              lineHeight: 1.7,
              color: 'var(--gbt-on-dark-muted)',
              marginBottom: '2.5rem',
            }}>
              We're not an AI hype shop. We're operations people — practical, direct, and only interested in outcomes that show up in your actual week.
            </p>

            <a
              href="/contact"
              className="gbt-btn gbt-btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              Book Assessment
              <ArrowRight size={15} strokeWidth={2} />
            </a>
          </div>

          {/* Right — pillars */}
          <div className="about-pillars" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {pillars.map(({ label, body }) => (
              <div
                key={label}
                className="about-pillar"
                style={{
                  padding: '1.5rem',
                  borderRadius: 10,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <p style={{
                  fontFamily: 'var(--font-newsreader)',
                  fontSize: '1rem',
                  color: 'var(--gbt-brand-amber)',
                  marginBottom: '0.375rem',
                  fontWeight: 400,
                }}>
                  {label}
                </p>
                <p style={{
                  fontFamily: 'var(--font-hanken)',
                  fontSize: '0.875rem',
                  lineHeight: 1.6,
                  color: 'var(--gbt-on-dark-muted)',
                }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Founder */}
        <div
          className="about-clients"
          style={{
            marginTop: '5rem',
            paddingTop: '3rem',
            borderTop: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.25)',
            marginBottom: '2rem',
          }}>
            The Founder
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '2rem', alignItems: 'flex-start' }} className="founder-grid">
            <style>{`@media(max-width:600px){.founder-grid{grid-template-columns:1fr}}`}</style>
            {/* Photo */}
            <div style={{
              width: 96, height: 96,
              borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid rgba(217,119,66,0.35)',
              flexShrink: 0,
            }}>
              <img
                src="/frank.png"
                alt="Frank Ogutu"
                width={96}
                height={96}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            {/* Text */}
            <div>
              <p style={{ fontFamily: 'var(--font-newsreader)', fontSize: '1.125rem', color: '#fff', marginBottom: '0.25rem', fontWeight: 400 }}>
                Frank Ogutu
              </p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--gbt-brand-amber)', marginBottom: '1.25rem', letterSpacing: '0.04em' }}>
                Operational Thinking. Practical AI.
              </p>
              <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '0.9rem', color: 'var(--gbt-on-dark-muted)', lineHeight: 1.7, marginBottom: '0.875rem' }}>
                GetBackTime was built on a simple idea: most AI agencies sell tools before understanding the business. We do the opposite.
              </p>
              <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '0.9rem', color: 'var(--gbt-on-dark-muted)', lineHeight: 1.7, marginBottom: '0.875rem' }}>
                Every engagement starts with an operational audit — how leads come in, how your team works, where repetitive tasks exist, and what's slipping through the cracks.
              </p>
              <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '0.9rem', color: 'var(--gbt-on-dark-muted)', lineHeight: 1.7 }}>
                Only then do we recommend automation, so the systems we implement actually save time instead of adding complexity.
              </p>
            </div>
          </div>
        </div>

        {/* Who we work with */}
        <div
          style={{
            marginTop: '3.5rem',
            paddingTop: '2.5rem',
            borderTop: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.25)',
            marginBottom: '1.25rem',
          }}>
            Who we work with
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
            {clients.map((c) => (
              <span
                key={c}
                style={{
                  fontFamily: 'var(--font-hanken)',
                  fontSize: '0.875rem',
                  color: 'rgba(255,255,255,0.5)',
                  padding: '0.375rem 0.875rem',
                  borderRadius: 100,
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.03)',
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
