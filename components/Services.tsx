'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Database, RefreshCw, Calendar, Layers, BarChart2, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const services = [
  {
    icon: Mail,
    title: 'Lead response',
    body: 'Reply to inbound leads in under 60 seconds — even at midnight. First contact wins the job.',
  },
  {
    icon: Database,
    title: 'CRM & data entry',
    body: 'Stop copying contacts, notes and updates by hand. Your CRM stays clean without you touching it.',
  },
  {
    icon: RefreshCw,
    title: 'Client follow-up',
    body: 'Proposals, check-ins, review requests — sent at exactly the right moment, every time.',
  },
  {
    icon: Calendar,
    title: 'Scheduling',
    body: 'Kill the back-and-forth. Bookings, confirmations and reminders run without you in the middle.',
  },
  {
    icon: Layers,
    title: 'Internal handoffs',
    body: 'New sale? Onboarding kicks off automatically. Your team gets what they need before they ask.',
  },
  {
    icon: BarChart2,
    title: 'Reporting',
    body: 'Weekly summaries, pipeline snapshots and performance numbers — waiting in your inbox on Monday.',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const ease = 'cubic-bezier(0.2, 0.8, 0.2, 1)'

    gsap.from('.svc-label', {
      opacity: 0, y: 16, duration: 0.55, ease,
      scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
    })
    gsap.from('.svc-headline', {
      opacity: 0, y: 24, duration: 0.65, ease,
      scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
      delay: 0.08,
    })
    gsap.from('.svc-sub', {
      opacity: 0, y: 16, duration: 0.55, ease,
      scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
      delay: 0.16,
    })

    gsap.from('.svc-card', {
      opacity: 0,
      y: 44,
      duration: 0.78,
      stagger: 0.1,
      ease,
      scrollTrigger: { trigger: '.svc-grid', start: 'top 80%' },
    })

    gsap.from('.svc-promise', {
      opacity: 0,
      y: 28,
      duration: 0.7,
      ease,
      scrollTrigger: { trigger: '.svc-promise', start: 'top 88%' },
    })
  }, { scope: sectionRef })

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{ background: 'var(--gbt-dusk)', padding: '7rem 0 8rem', position: 'relative', overflow: 'hidden' }}
    >
      <div className="noise-overlay" />

      {/* Ambient glow */}
      <div style={{
        position: 'absolute',
        top: 0, left: '20%', right: '20%', height: '40%',
        background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(217,119,66,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="gbt-container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ maxWidth: 560, marginBottom: '4rem' }}>
          <p className="svc-label gbt-eyebrow gbt-eyebrow-amber" style={{ marginBottom: '1rem' }}>What we do</p>
          <h2 className="svc-headline gbt-display gbt-h2" style={{ color: '#fff', marginBottom: '1rem', lineHeight: 1.1 }}>
            Six problems we fix before Friday.
          </h2>
          <p className="svc-sub" style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: '1rem',
            lineHeight: 1.65,
            color: 'var(--gbt-on-dark-muted)',
          }}>
            We map your week, spot the repetition, and wire up the workflows. You keep doing the work only you can do.
          </p>
        </div>

        {/* Service cards */}
        <div
          className="svc-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3.5rem',
          }}
        >
          {services.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="svc-card"
              style={{
                padding: '1.75rem',
                borderRadius: 12,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                transition: 'background 200ms ease, border-color 200ms ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'rgba(255,255,255,0.07)'
                el.style.borderColor = 'rgba(217,119,66,0.3)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'rgba(255,255,255,0.04)'
                el.style.borderColor = 'rgba(255,255,255,0.08)'
              }}
            >
              {/* Icon */}
              <div style={{
                width: 38,
                height: 38,
                borderRadius: 8,
                background: 'rgba(217,119,66,0.12)',
                border: '1px solid rgba(217,119,66,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
              }}>
                <Icon size={17} color="var(--gbt-brand-amber)" strokeWidth={1.75} />
              </div>

              <h3 style={{
                fontFamily: 'var(--font-newsreader)',
                fontSize: '1.125rem',
                fontWeight: 400,
                color: '#fff',
                marginBottom: '0.625rem',
              }}>
                {title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-hanken)',
                fontSize: '0.875rem',
                lineHeight: 1.65,
                color: 'var(--gbt-on-dark-muted)',
              }}>
                {body}
              </p>
            </div>
          ))}
        </div>

        {/* Anti-upsell promise bar */}
        <div
          className="svc-promise"
          style={{
            padding: '2rem 2.5rem',
            borderRadius: 14,
            background: 'rgba(217,119,66,0.07)',
            border: '1px solid rgba(217,119,66,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div style={{ maxWidth: 520 }}>
            <p style={{
              fontFamily: 'var(--font-newsreader)',
              fontSize: '1.25rem',
              color: '#fff',
              marginBottom: '0.5rem',
              lineHeight: 1.35,
              fontWeight: 400,
            }}>
              We also tell you what <em>not</em> to automate.
            </p>
            <p style={{
              fontFamily: 'var(--font-hanken)',
              fontSize: '0.9rem',
              color: 'var(--gbt-on-dark-muted)',
              lineHeight: 1.65,
            }}>
              Not every task should run on its own. We're honest about where automation adds friction instead of removing it — and we'll say so upfront, before any work begins.
            </p>
          </div>
          <a
            href="#book"
            className="gbt-btn gbt-btn-primary"
            style={{ flexShrink: 0, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            Book your audit
            <ArrowRight size={15} strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  )
}
