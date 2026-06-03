'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const stats = [
  { value: 8, unit: ' hrs', suffix: '/wk', label: 'Average time saved in the first month', prefix: '' },
  { value: 90, unit: '%', suffix: '', label: 'Of flagged tasks can be automated without custom code', prefix: '' },
  { value: 1, unit: '', suffix: ' conversation', label: 'Is all it takes to start getting time back', prefix: '' },
  { value: 5, unit: ' days', suffix: '', label: 'To receive your full prioritised audit report', prefix: '' },
]

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const ease = 'cubic-bezier(0.2, 0.8, 0.2, 1)'

    gsap.from('.stats-headline', {
      opacity: 0, y: 24, duration: 0.7, ease,
      scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
    })

    // Counter animations
    document.querySelectorAll('.stat-counter').forEach((el) => {
      const target = parseInt(el.getAttribute('data-target') ?? '0', 10)
      const unit = el.getAttribute('data-unit') ?? ''
      const suffix = el.getAttribute('data-suffix') ?? ''
      const obj = { v: 0 }

      gsap.to(obj, {
        v: target,
        duration: 1.8,
        ease: 'power2.out',
        onUpdate: () => {
          el.textContent = Math.round(obj.v) + unit + suffix
        },
        scrollTrigger: { trigger: el, start: 'top 82%', once: true },
      })
    })

    // Stat items stagger
    gsap.from('.stat-item', {
      opacity: 0,
      y: 40,
      duration: 0.75,
      stagger: 0.12,
      ease,
      scrollTrigger: { trigger: '.stats-grid', start: 'top 80%' },
    })

    // Code mockup reveal
    gsap.from('.stats-code', {
      opacity: 0,
      x: 40,
      duration: 0.85,
      ease,
      scrollTrigger: { trigger: '.stats-code', start: 'top 82%' },
    })
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      style={{ background: 'var(--gbt-dusk)', padding: '7rem 0 8rem', position: 'relative', overflow: 'hidden' }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute',
        top: 0, left: '30%', right: '30%',
        height: '50%',
        background: 'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(217,119,66,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="noise-overlay" />

      <div className="gbt-container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="stats-two-col">
          <style>{`@media(max-width:900px){.stats-two-col{grid-template-columns:1fr}}`}</style>

          {/* Left: numbers */}
          <div>
            <p className="gbt-eyebrow gbt-eyebrow-amber stats-headline" style={{ marginBottom: '1.25rem' }}>By the numbers</p>
            <h2 className="stats-headline gbt-display gbt-h2" style={{ color: '#fff', marginBottom: '3.5rem', lineHeight: 1.1 }}>
              Numbers that belong on your P&amp;L, not a slide deck.
            </h2>

            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem 3rem' }}>
              {stats.map(({ value, unit, suffix, label }) => (
                <div key={label} className="stat-item">
                  <div
                    className="stat-counter gbt-stat-number"
                    data-target={value}
                    data-unit={unit}
                    data-suffix={suffix}
                    style={{ marginBottom: '0.5rem' }}
                  >
                    0{unit}{suffix}
                  </div>
                  <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '0.875rem', lineHeight: 1.55, color: 'var(--gbt-on-dark-muted)' }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: code mockup */}
          <div className="stats-code">
            <div style={{
              borderRadius: 12,
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 24px 64px rgba(0,0,0,0.35)',
            }}>
              {/* Window bar */}
              <div style={{
                background: 'rgba(255,255,255,0.04)',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                padding: '0.75rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F56' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFBD2E' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#27C93F' }} />
                <span style={{ marginLeft: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>
                  workflow.json
                </span>
              </div>

              {/* Code content */}
              <div className="gbt-code" style={{ borderRadius: 0, border: 'none' }}>
                <div><span className="token-comment">// Running on its own since Tuesday</span></div>
                <div style={{ marginTop: '0.75rem' }}>
                  <span className="token-key">"trigger"</span>
                  <span style={{ color: 'rgba(255,255,255,0.4)' }}>: </span>
                  <span className="token-str">"new_lead_form_submit"</span>
                </div>
                <div>
                  <span className="token-key">"action"</span>
                  <span style={{ color: 'rgba(255,255,255,0.4)' }}>: </span>
                  <span className="token-str">"send_welcome_email"</span>
                </div>
                <div>
                  <span className="token-key">"delay"</span>
                  <span style={{ color: 'rgba(255,255,255,0.4)' }}>: </span>
                  <span className="token-val">"90s"</span>
                </div>
                <div style={{ marginTop: '0.75rem', padding: '0.5rem 0.75rem', background: 'rgba(94,124,110,0.15)', borderRadius: 6, border: '1px solid rgba(94,124,110,0.25)' }}>
                  <span style={{ color: 'var(--gbt-sage)', fontSize: '0.75rem' }}>✓</span>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8125rem', marginLeft: '0.5rem' }}>Ran 43 times · Saved ~6 hrs</span>
                </div>
              </div>
            </div>

            {/* Badge below mockup */}
            <div style={{ marginTop: '1.25rem', display: 'flex', justifyContent: 'center' }}>
              <span className="gbt-badge gbt-badge-sage">
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gbt-sage)' }} />
                Running on its own
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
