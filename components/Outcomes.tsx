'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const outcomes = [
  {
    industry: 'Real estate agency',
    task: 'Lead follow-up emails',
    before: '3 hrs',
    after: '45 sec',
    label: 'response time',
    change: 'Automated the moment a form is submitted — 24/7, no one watching.',
  },
  {
    industry: 'Coaching business',
    task: 'Admin & scheduling',
    before: '22 hrs/wk',
    after: '4 hrs/wk',
    label: 'spent on admin',
    change: 'Bookings, reminders and follow-ups run without them touching a thing.',
  },
  {
    industry: 'Local contractor',
    task: 'Client onboarding',
    before: '6 days',
    after: '2 days',
    label: 'to onboard a client',
    change: 'Intake forms, contracts and welcome packs now go out automatically.',
  },
  {
    industry: 'Med spa',
    task: 'Appointment no-shows',
    before: '34%',
    after: '8%',
    label: 'no-show rate',
    change: 'A three-step reminder sequence now runs itself before every appointment.',
  },
]

export default function Outcomes() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const ease = 'cubic-bezier(0.2, 0.8, 0.2, 1)'

    gsap.from('.outcomes-label', {
      opacity: 0, y: 16, duration: 0.55, ease,
      scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
    })
    gsap.from('.outcomes-headline', {
      opacity: 0, y: 24, duration: 0.65, ease,
      scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
      delay: 0.08,
    })
    gsap.from('.outcomes-sub', {
      opacity: 0, y: 16, duration: 0.55, ease,
      scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
      delay: 0.16,
    })

    gsap.from('.outcome-card', {
      opacity: 0,
      y: 44,
      duration: 0.78,
      stagger: 0.13,
      ease,
      scrollTrigger: { trigger: '.outcomes-grid', start: 'top 80%' },
    })
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      className="mob-pad"
      style={{ background: 'var(--gbt-canvas)', padding: '7rem 0 8rem' }}
    >
      <div className="gbt-container">
        <div style={{ maxWidth: 560, marginBottom: '4rem' }}>
          <p className="outcomes-label gbt-eyebrow" style={{ marginBottom: '1rem' }}>Real results</p>
          <h2 className="outcomes-headline gbt-display gbt-h2" style={{ color: 'var(--gbt-ink)', marginBottom: '1rem' }}>
            What actually changes in your week.
          </h2>
          <p className="outcomes-sub gbt-body" style={{ maxWidth: 460 }}>
            These are real outcomes from real business owners — not projections, not averages.
          </p>
        </div>

        <div
          className="outcomes-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1.5rem' }}
        >
          {outcomes.map(({ industry, task, before, after, label, change }) => (
            <div
              key={industry}
              className="outcome-card gbt-card"
              style={{ padding: '2rem', background: '#fff', position: 'relative', overflow: 'hidden' }}
            >
              {/* Industry chip */}
              <span style={{
                display: 'inline-block',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                color: 'var(--gbt-brand-amber)',
                background: 'var(--gbt-brand-amber-subtle)',
                border: '1px solid rgba(217,119,66,0.15)',
                borderRadius: 4,
                padding: '0.2rem 0.5rem',
                marginBottom: '1rem',
                letterSpacing: '0.04em',
              }}>
                {industry}
              </span>

              <p style={{
                fontFamily: 'var(--font-hanken)',
                fontSize: '0.875rem',
                color: 'var(--gbt-ink-muted)',
                marginBottom: '1.5rem',
              }}>
                {task}
              </p>

              {/* Before → After */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontFamily: 'var(--font-newsreader)',
                    fontSize: '1.875rem',
                    color: 'rgba(30,26,22,0.22)',
                    lineHeight: 1,
                    fontWeight: 400,
                  }}>
                    {before}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.625rem',
                    color: 'rgba(30,26,22,0.3)',
                    marginTop: '0.3rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}>
                    before
                  </div>
                </div>

                <ArrowRight size={16} color="var(--gbt-brand-amber)" strokeWidth={1.75} style={{ flexShrink: 0 }} />

                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontFamily: 'var(--font-newsreader)',
                    fontSize: '1.875rem',
                    color: 'var(--gbt-brand-amber)',
                    lineHeight: 1,
                    fontWeight: 400,
                  }}>
                    {after}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.625rem',
                    color: 'var(--gbt-brand-amber)',
                    opacity: 0.65,
                    marginTop: '0.3rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}>
                    after
                  </div>
                </div>

                <p style={{
                  flex: 1,
                  paddingLeft: '0.375rem',
                  fontFamily: 'var(--font-hanken)',
                  fontSize: '0.8rem',
                  color: 'var(--gbt-ink-muted)',
                  lineHeight: 1.4,
                }}>
                  {label}
                </p>
              </div>

              {/* What changed */}
              <div style={{
                borderTop: '1px solid var(--gbt-hairline)',
                paddingTop: '1rem',
                fontFamily: 'var(--font-hanken)',
                fontSize: '0.8125rem',
                color: 'var(--gbt-ink-muted)',
                lineHeight: 1.6,
              }}>
                {change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
