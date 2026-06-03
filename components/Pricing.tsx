'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const tiers = [
  {
    name: 'Audit',
    price: '$1,200',
    cadence: 'one-time',
    eyebrow: 'Start here',
    description: 'We come in once, look at everything, and leave you with a prioritised list.',
    features: [
      '60-minute workflow conversation',
      'Full written audit report',
      'Prioritised automation list',
      'Estimated hours saved per item',
      'Tool recommendations (no upsell)',
    ],
    cta: 'Book the audit',
    featured: false,
  },
  {
    name: 'Audit + Build',
    price: '$3,500',
    cadence: 'one-time',
    eyebrow: 'Most common',
    description: 'The audit, plus we build the top three automations before we leave.',
    features: [
      'Everything in Audit',
      'Three automations built for you',
      'Handoff walkthrough session',
      'Two weeks of check-in support',
      'Documentation for your team',
    ],
    cta: 'Book the audit + build',
    featured: true,
  },
  {
    name: 'Ongoing',
    price: '$800',
    cadence: '/month',
    eyebrow: 'Growing teams',
    description: 'Continuous assessment and automation as your business changes.',
    features: [
      'Everything in Audit + Build',
      'Monthly workflow review',
      'New automations as you grow',
      'Priority support channel',
      'Quarterly time-savings report',
    ],
    cta: 'Start the conversation',
    featured: false,
  },
]

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const ease = 'cubic-bezier(0.2, 0.8, 0.2, 1)'

    gsap.from('.pricing-header', {
      opacity: 0, y: 24, duration: 0.65, ease,
      scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
    })

    gsap.from('.pricing-card', {
      opacity: 0,
      y: 60,
      duration: 0.8,
      stagger: 0.15,
      ease,
      scrollTrigger: { trigger: '.pricing-grid', start: 'top 80%' },
    })

    gsap.from('.pricing-footer-note', {
      opacity: 0, y: 12, duration: 0.5, ease,
      scrollTrigger: { trigger: '.pricing-footer-note', start: 'top 88%' },
    })
  }, { scope: sectionRef })

  return (
    <section
      id="pricing"
      ref={sectionRef}
      style={{ background: 'var(--gbt-canvas)', padding: '7rem 0 8rem', borderTop: '1px solid var(--gbt-hairline)' }}
    >
      <div className="gbt-container">
        <div className="pricing-header" style={{ maxWidth: 520, marginBottom: '4rem' }}>
          <p className="gbt-eyebrow" style={{ marginBottom: '1rem' }}>Three ways to start</p>
          <h2 className="gbt-display gbt-h2" style={{ color: 'var(--gbt-ink)', marginBottom: '1rem' }}>
            Pick the one that fits where you are now.
          </h2>
          <p className="gbt-body">
            Start with the audit. Upgrade if you want us to build. Stay if you want it to grow with you. No contracts, no lock-in.
          </p>
        </div>

        <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
          {tiers.map(({ name, price, cadence, eyebrow, description, features, cta, featured }) => (
            <div
              key={name}
              className={`pricing-card gbt-card ${featured ? 'gbt-pricing-featured' : ''}`}
              style={{
                padding: '2rem',
                background: featured ? '#fff' : '#fff',
                border: featured ? '1.5px solid var(--gbt-brand-amber)' : '1px solid var(--gbt-hairline)',
                position: 'relative',
                transform: featured ? 'scale(1.02)' : 'none',
              }}
            >
              {featured && (
                <div style={{
                  position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                  background: 'var(--gbt-brand-amber)', color: '#fff',
                  fontFamily: 'var(--font-hanken)', fontSize: '0.75rem', fontWeight: 500,
                  padding: '0.25rem 0.875rem', borderRadius: 9999,
                  whiteSpace: 'nowrap',
                }}>
                  Most common
                </div>
              )}

              <p className="gbt-eyebrow" style={{ marginBottom: '1rem', color: featured ? 'var(--gbt-brand-amber)' : undefined }}>
                {eyebrow}
              </p>

              <h3 style={{
                fontFamily: 'var(--font-newsreader)',
                fontSize: '1.375rem',
                fontWeight: 400,
                color: 'var(--gbt-ink)',
                marginBottom: '0.375rem',
              }}>
                {name}
              </h3>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '0.875rem' }}>
                <span style={{ fontFamily: 'var(--font-newsreader)', fontSize: '2.25rem', fontWeight: 400, color: 'var(--gbt-ink)', letterSpacing: '-0.02em' }}>
                  {price}
                </span>
                <span style={{ fontFamily: 'var(--font-hanken)', fontSize: '0.875rem', color: 'var(--gbt-ink-muted)' }}>
                  {cadence}
                </span>
              </div>

              <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '0.9375rem', color: 'var(--gbt-ink-muted)', lineHeight: 1.55, marginBottom: '1.5rem' }}>
                {description}
              </p>

              <hr className="gbt-divider" style={{ marginBottom: '1.5rem' }} />

              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {features.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontFamily: 'var(--font-hanken)', fontSize: '0.875rem', color: 'var(--gbt-ink)' }}>
                    <span style={{
                      width: 18, height: 18, borderRadius: '50%', flexShrink: 0, marginTop: 1,
                      background: featured ? 'var(--gbt-brand-amber-subtle)' : 'rgba(94,124,110,0.12)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Check size={10} color={featured ? 'var(--gbt-brand-amber)' : 'var(--gbt-sage)'} strokeWidth={2.5} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#book"
                className={`gbt-btn ${featured ? 'gbt-btn-primary' : 'gbt-btn-ghost-light'}`}
                style={{ width: '100%', justifyContent: 'center', boxShadow: featured ? 'var(--gbt-shadow-amber)' : 'none' }}
              >
                {cta}
              </a>
            </div>
          ))}
        </div>

        <p className="pricing-footer-note" style={{
          textAlign: 'center',
          marginTop: '2.5rem',
          fontFamily: 'var(--font-hanken)',
          fontSize: '0.875rem',
          color: 'var(--gbt-ink-muted)',
        }}>
          Not sure which to pick? <a href="#book" style={{ color: 'var(--gbt-brand-amber)', textDecoration: 'none' }}>Book a free 20-minute call</a> and we'll tell you honestly.
        </p>
      </div>
    </section>
  )
}
