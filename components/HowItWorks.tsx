'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Eye, ListChecks, Zap } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const steps = [
  {
    num: '01',
    icon: Eye,
    title: 'We watch your week',
    body: 'A 60-minute conversation where we shadow your current workflows. We ask what you do every Monday, what triggers your emails, and what you wish would just happen on its own.',
  },
  {
    num: '02',
    icon: ListChecks,
    title: 'We map the repetition',
    body: 'We identify every task you do on a schedule, in a pattern, or every time X happens. Then we separate the work worth automating from the work that needs a human touch.',
  },
  {
    num: '03',
    icon: Zap,
    title: 'You get your time back',
    body: 'We hand you a prioritised list with estimated hours saved per item. If you want, we build it for you — three workflows before we leave. Then it runs on its own.',
  },
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<SVGLineElement>(null)

  useGSAP(() => {
    const ease = 'cubic-bezier(0.2, 0.8, 0.2, 1)'

    // Section label + headline
    gsap.from('.hiw-label', { opacity: 0, y: 16, duration: 0.55, ease, scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' } })
    gsap.from('.hiw-headline', { opacity: 0, y: 24, duration: 0.65, ease, delay: 0.1, scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' } })

    // Connecting line draws itself — use a fixed value because the element
    // may be display:none (media query) when getTotalLength() is called.
    if (lineRef.current) {
      const len = 2000
      gsap.set(lineRef.current, { strokeDasharray: len, strokeDashoffset: len })
      gsap.to(lineRef.current, {
        strokeDashoffset: 0,
        duration: 1.6,
        ease: 'power2.inOut',
        scrollTrigger: { trigger: '.hiw-steps', start: 'top 75%' },
      })
    }

    // Step cards stagger in
    gsap.from('.hiw-step', {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.18,
      ease,
      scrollTrigger: { trigger: '.hiw-steps', start: 'top 78%' },
    })

    // Step number count-up feel (opacity stagger with scale)
    gsap.from('.hiw-num', {
      opacity: 0,
      scale: 0.6,
      duration: 0.55,
      stagger: 0.18,
      ease,
      scrollTrigger: { trigger: '.hiw-steps', start: 'top 78%' },
    })
  }, { scope: sectionRef })

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="mob-pad"
      style={{ background: 'var(--gbt-canvas)', padding: '7rem 0 8rem' }}
    >
      <div className="gbt-container">
        {/* Header */}
        <div style={{ maxWidth: 560, marginBottom: '5rem' }}>
          <p className="hiw-label gbt-eyebrow" style={{ marginBottom: '1rem' }}>How it works</p>
          <h2 className="hiw-headline gbt-display gbt-h2" style={{ color: 'var(--gbt-ink)', marginBottom: '1rem' }}>
            Three steps from problem to fixed.
          </h2>
          <p className="gbt-body" style={{ maxWidth: 460 }}>
            We give you your hours back — not another tool to learn.
          </p>
        </div>

        {/* Steps */}
        <div className="hiw-steps" style={{ position: 'relative' }}>
          {/* Connecting SVG line (desktop only) */}
          <svg
            style={{
              position: 'absolute',
              top: 52,
              left: '16.5%',
              width: '67%',
              height: 2,
              overflow: 'visible',
              display: 'none',
            }}
            className="hiw-connector"
            aria-hidden
          >
            <line
              ref={lineRef}
              x1="0" y1="1"
              x2="100%" y2="1"
              stroke="var(--gbt-hairline)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
            />
          </svg>

          <style>{`.hiw-connector { display: none } @media(min-width:768px){.hiw-connector{display:block}}`}</style>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {steps.map(({ num, icon: Icon, title, body }) => (
              <div
                key={num}
                className="hiw-step gbt-card"
                style={{ padding: '2rem', position: 'relative', background: '#fff' }}
              >
                {/* Step number */}
                <div
                  className="hiw-num"
                  style={{
                    fontFamily: 'var(--font-newsreader)',
                    fontSize: '0.75rem',
                    fontWeight: 400,
                    color: 'var(--gbt-brand-amber)',
                    letterSpacing: '0.06em',
                    marginBottom: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: 32, height: 32,
                    borderRadius: '50%',
                    background: 'var(--gbt-brand-amber-subtle)',
                    border: '1px solid rgba(217,119,66,0.15)',
                  }}>
                    <Icon size={15} color="var(--gbt-brand-amber)" strokeWidth={1.75} />
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--gbt-brand-amber)', opacity: 0.8 }}>
                    {num}
                  </span>
                </div>

                <h3 className="gbt-h3" style={{ marginBottom: '0.75rem', color: 'var(--gbt-ink)' }}>{title}</h3>
                <p className="gbt-body gbt-small" style={{ color: 'var(--gbt-ink-muted)' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom link */}
        <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
          <a
            href="/contact"
            style={{
              fontFamily: 'var(--font-hanken)',
              fontSize: '0.9375rem',
              color: 'var(--gbt-brand-amber)',
              textDecoration: 'none',
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              transition: 'gap 200ms ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.gap = '0.625rem')}
            onMouseLeave={e => (e.currentTarget.style.gap = '0.375rem')}
          >
            Book Assessment →
          </a>
        </div>
      </div>
    </section>
  )
}
