'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, BarChart2, CreditCard, Settings } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const categories = [
  {
    color: '#4A9BC7',
    bg: 'rgba(74,155,199,0.08)',
    icon: Mail,
    label: 'Communications',
    items: ['Email replies and follow-ups', 'Client status updates', 'Newsletter sends', 'Meeting summaries'],
    example: 'Every time a new lead fills out your form, they get a reply in 90 seconds — without you.',
  },
  {
    color: '#8B6BA8',
    bg: 'rgba(139,107,168,0.08)',
    icon: BarChart2,
    label: 'Reporting',
    items: ['Weekly KPI summaries', 'Spreadsheet updates', 'Dashboard pulls', 'Data exports'],
    example: 'Your Monday morning report writes itself the night before, every week.',
  },
  {
    color: '#C49A2E',
    bg: 'rgba(196,154,46,0.08)',
    icon: CreditCard,
    label: 'Finance',
    items: ['Invoice chasing', 'Expense categorisation', 'Reconciliation reminders', 'Payment confirmations'],
    example: 'Overdue invoices get a polite nudge at day 7, day 14, and day 30. No manual tracking.',
  },
  {
    color: '#B85C47',
    bg: 'rgba(184,92,71,0.08)',
    icon: Settings,
    label: 'Operations',
    items: ['Scheduling and booking', 'Intake forms and routing', 'Handoff notifications', 'Status checks'],
    example: 'When a project moves to "complete," your client gets a check-in email and your accountant gets the invoice.',
  },
]

export default function AuditCategories() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const ease = 'cubic-bezier(0.2, 0.8, 0.2, 1)'

    gsap.from('.cat-header', {
      opacity: 0, y: 24, duration: 0.65, ease,
      scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
    })

    gsap.from('.cat-card', {
      opacity: 0,
      y: 60,
      duration: 0.75,
      stagger: 0.13,
      ease,
      scrollTrigger: { trigger: '.cat-grid', start: 'top 80%' },
    })

    // Icon circles pop in
    gsap.from('.cat-icon-circle', {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.13,
      ease: 'back.out(1.5)',
      scrollTrigger: { trigger: '.cat-grid', start: 'top 78%' },
    })
  }, { scope: sectionRef })

  return (
    <section
      id="audit"
      ref={sectionRef}
      className="mob-pad"
      style={{ background: '#FEF9F4', padding: '7rem 0 8rem', borderTop: '1px solid var(--gbt-hairline)' }}
    >
      <div className="gbt-container">
        <div className="cat-header" style={{ maxWidth: 560, marginBottom: '4rem' }}>
          <p className="gbt-eyebrow" style={{ marginBottom: '1rem' }}>What we audit</p>
          <h2 className="gbt-display gbt-h2" style={{ color: 'var(--gbt-ink)', marginBottom: '1rem' }}>
            Four places where your week quietly disappears.
          </h2>
          <p className="gbt-body">
            Most small businesses have repetitive work hiding in the same four categories. We know where to look — and we've seen what's worth fixing.
          </p>
        </div>

        <div className="cat-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(268px, 1fr))', gap: '1.25rem' }}>
          {categories.map(({ color, bg, icon: Icon, label, items, example }) => (
            <div
              key={label}
              className="cat-card gbt-card"
              style={{ padding: '1.75rem', background: '#fff', cursor: 'default', transition: 'transform 240ms cubic-bezier(0.2,0.8,0.2,1), box-shadow 240ms cubic-bezier(0.2,0.8,0.2,1)' }}
              onMouseEnter={e => {
                gsap.to(e.currentTarget, { y: -4, boxShadow: '0 8px 32px rgba(30,26,22,0.1)', duration: 0.25 })
              }}
              onMouseLeave={e => {
                gsap.to(e.currentTarget, { y: 0, boxShadow: 'none', duration: 0.35 })
              }}
            >
              {/* Icon */}
              <div
                className="cat-icon-circle"
                style={{
                  width: 44, height: 44,
                  borderRadius: '50%',
                  background: bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <Icon size={20} color={color} strokeWidth={1.75} />
              </div>

              {/* Label */}
              <h3
                className="gbt-h3"
                style={{ color: 'var(--gbt-ink)', marginBottom: '1rem', fontSize: '1.0625rem' }}
              >
                {label}
              </h3>

              {/* Items */}
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.25rem' }}>
                {items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: 'var(--font-hanken)',
                      fontSize: '0.875rem',
                      color: 'var(--gbt-ink-muted)',
                      padding: '0.375rem 0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      borderBottom: '1px solid var(--gbt-hairline)',
                    }}
                  >
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: color, opacity: 0.6, flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Example callout */}
              <div
                style={{
                  background: bg,
                  borderRadius: 8,
                  padding: '0.75rem 1rem',
                  borderLeft: `2.5px solid ${color}`,
                }}
              >
                <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '0.8125rem', color: 'var(--gbt-ink)', lineHeight: 1.6, fontStyle: 'italic' }}>
                  "{example}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
