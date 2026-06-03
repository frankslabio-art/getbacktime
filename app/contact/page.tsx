'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { ArrowRight, Check, X, Mail, Clock, ShieldCheck } from 'lucide-react'

const industries = [
  'Local Service Business',
  'Marketing / Creative Agency',
  'Consulting / Professional Services',
  'Real Estate',
  'Med Spa / Wellness',
  'Law Firm',
  'Contractor / Trades',
  'Sales Team',
  'Healthcare Practice',
  'E-commerce',
  'Coaching / Education',
  'Other',
]

const teamSizes = [
  'Just me (solo)',
  '2–5 people',
  '6–15 people',
  '16–50 people',
  '50+ people',
]

const goodFit = [
  "You're spending 10+ hours a week on tasks that feel repetitive",
  "You want to grow without immediately hiring more staff",
  "You're open to changing how things work if the numbers make sense",
  "You want honest advice — even if the answer is 'not yet'",
  "You run a real business with real day-to-day operations",
  "You want a clear picture of what to fix first, in priority order",
]

const notFit = [
  "You want someone to build you a custom app from scratch",
  "You're looking for generic AI tool recommendations off a list",
  "You're not willing to spend 60 minutes walking us through how you work",
  "You expect overnight results with zero involvement on your end",
]

const expects = [
  { step: '01', title: 'Workflow review', detail: 'We map how your week actually runs — lead intake, client work, admin, reporting.' },
  { step: '02', title: 'Opportunity ranking', detail: 'Every repetitive task scored by time saved and complexity to automate.' },
  { step: '03', title: 'Honest assessment', detail: "We flag what's worth automating and what isn't. No padding the list." },
  { step: '04', title: 'ROI estimate', detail: 'Hours saved per week, per item — before you commit to anything.' },
  { step: '05', title: '60-min readout call', detail: 'We walk you through the full report and answer every question.' },
]

const faqs = [
  {
    q: "What's included in the $497 assessment?",
    a: 'A full workflow review, process scoring, a ranked report of your highest-ROI automation opportunities, honest tool recommendations, a 90-day roadmap, and a 60-minute readout session — all delivered within 48 hours of your discovery call.',
  },
  {
    q: 'What happens after the assessment call?',
    a: "You receive a written Automation Opportunity Report — workflow maps, the highest-ROI opportunities, and a prioritised action plan. You can implement with us or take it to someone else. We're flexible.",
  },
  {
    q: 'How long does the full process take?',
    a: 'The written report is delivered within 48 hours of your discovery call. The call itself is 45–60 minutes. Most clients have their full picture within a week of booking.',
  },
  {
    q: 'Do I need to know anything about AI to work with you?',
    a: "Not at all. Our clients are business owners, not technologists. We handle everything technical — you just describe how your business runs.",
  },
  {
    q: "What if automation isn't right for my business?",
    a: "We'll tell you directly. Not every business is ready for automation, and forcing it can make operations worse. An honest answer is part of the service.",
  },
  {
    q: 'What tools do you use?',
    a: "We're tool-agnostic — we don't have a platform to sell. Common tools include Make, Zapier, GoHighLevel, HubSpot, Notion, and Airtable. The right tool depends on your specific setup.",
  },
]

// ── Replace with your actual cal.com booking link ──
const CAL_LINK = 'https://cal.com/franks-lab-ipmtbk/getbacktime-assessment'

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', business: '',
    industry: '', teamSize: '', challenge: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [k]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await fetch('https://formspree.io/f/xqeozvad', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          business: form.business,
          industry: form.industry,
          teamSize: form.teamSize,
          challenge: form.challenge,
        }),
      })
    } finally {
      setSubmitting(false)
      setSubmitted(true)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem 1rem',
    fontFamily: 'var(--font-hanken)',
    fontSize: '0.9375rem',
    color: 'var(--gbt-ink)',
    background: '#fff',
    border: '1px solid var(--gbt-hairline)',
    borderRadius: 8,
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 180ms ease',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'var(--font-hanken)',
    fontSize: '0.8125rem',
    fontWeight: 500,
    color: 'var(--gbt-ink)',
    marginBottom: '0.4rem',
  }

  return (
    <>
      <Nav />
      <main style={{ background: 'var(--gbt-canvas)' }}>

        {/* ── Hero ── */}
        <section style={{ background: 'var(--gbt-dusk)', padding: '9rem 0 5rem', position: 'relative', overflow: 'hidden' }}>
          <div className="noise-overlay" />
          <div style={{
            position: 'absolute', top: 0, left: '20%', right: '20%', height: '60%',
            background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(217,119,66,0.13) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div className="gbt-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <p className="gbt-eyebrow gbt-eyebrow-amber" style={{ marginBottom: '1.25rem' }}>Get in touch</p>
            <h1 className="gbt-display gbt-h1" style={{ color: '#fff', marginBottom: '1.25rem', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
              Book Your Assessment
            </h1>
            <p style={{
              fontFamily: 'var(--font-hanken)',
              fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
              color: 'rgba(255,255,255,0.6)',
              maxWidth: 520,
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: 1.65,
              marginBottom: '2rem',
            }}>
              Tell us about your business. We'll map your operations and show you exactly where automation will give you time back.
            </p>
            {/* Price pill in hero */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 1.25rem', borderRadius: 9999, background: 'rgba(217,119,66,0.12)', border: '1px solid rgba(217,119,66,0.25)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--gbt-brand-amber)', letterSpacing: '0.04em' }}>$497 one-time</span>
              <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
              <span style={{ fontFamily: 'var(--font-hanken)', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.5)' }}>Delivered within 48 hours</span>
            </div>
          </div>
        </section>

        {/* ── Form + sidebar ── */}
        <section style={{ padding: '6rem 0 5rem' }}>
          <div className="gbt-container">
            <style>{`
              @media(max-width:900px){.contact-grid{grid-template-columns:1fr !important}}
              @media(max-width:640px){.contact-form-row{grid-template-columns:1fr !important}}
            `}</style>
            <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '4rem', alignItems: 'start' }}>

              {/* ── Left: Form ── */}
              <div>
                <h2 className="gbt-display gbt-h2" style={{ color: 'var(--gbt-ink)', marginBottom: '0.5rem' }}>
                  Request Your Assessment
                </h2>
                <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '0.9375rem', color: 'var(--gbt-ink-muted)', marginBottom: '0.5rem' }}>
                  One-time fee: <strong style={{ color: 'var(--gbt-brand-amber)' }}>$497</strong> · Delivered within 48 hours
                </p>
                <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '0.8125rem', color: 'var(--gbt-ink-muted)', marginBottom: '2rem', fontStyle: 'italic' }}>
                  If this saves just 2 hours a week, you'll earn it back in the first month.
                </p>

                {submitted ? (
                  <div style={{ padding: '2.5rem', borderRadius: 12, background: 'rgba(94,124,110,0.08)', border: '1px solid rgba(94,124,110,0.3)', textAlign: 'center' }}>
                    <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(94,124,110,0.15)', border: '1px solid rgba(94,124,110,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                      <Check size={22} color="var(--gbt-sage)" strokeWidth={2} />
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-newsreader)', fontSize: '1.375rem', color: 'var(--gbt-ink)', marginBottom: '0.625rem' }}>Request received.</h3>
                    <p style={{ fontFamily: 'var(--font-hanken)', color: 'var(--gbt-ink-muted)', lineHeight: 1.65, fontSize: '0.9375rem', marginBottom: '1.25rem' }}>
                      A booking tab should have opened. If not,{' '}
                      <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gbt-brand-amber)', textDecoration: 'underline' }}>
                        click here to book your assessment
                      </a>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div className="contact-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={labelStyle}>First name</label>
                        <input required style={inputStyle} value={form.firstName} onChange={set('firstName')}
                          onFocus={e => e.target.style.borderColor = 'var(--gbt-brand-amber)'}
                          onBlur={e => e.target.style.borderColor = 'var(--gbt-hairline)'} />
                      </div>
                      <div>
                        <label style={labelStyle}>Last name</label>
                        <input required style={inputStyle} value={form.lastName} onChange={set('lastName')}
                          onFocus={e => e.target.style.borderColor = 'var(--gbt-brand-amber)'}
                          onBlur={e => e.target.style.borderColor = 'var(--gbt-hairline)'} />
                      </div>
                    </div>

                    <div>
                      <label style={labelStyle}>Business email</label>
                      <input required type="email" style={inputStyle} value={form.email} onChange={set('email')}
                        onFocus={e => e.target.style.borderColor = 'var(--gbt-brand-amber)'}
                        onBlur={e => e.target.style.borderColor = 'var(--gbt-hairline)'} />
                    </div>

                    <div>
                      <label style={labelStyle}>Business name</label>
                      <input required style={inputStyle} value={form.business} onChange={set('business')}
                        onFocus={e => e.target.style.borderColor = 'var(--gbt-brand-amber)'}
                        onBlur={e => e.target.style.borderColor = 'var(--gbt-hairline)'} />
                    </div>

                    <div className="contact-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={labelStyle}>Industry</label>
                        <select required style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }} value={form.industry} onChange={set('industry')}
                          onFocus={e => e.target.style.borderColor = 'var(--gbt-brand-amber)'}
                          onBlur={e => e.target.style.borderColor = 'var(--gbt-hairline)'}>
                          <option value="">Select…</option>
                          {industries.map(i => <option key={i}>{i}</option>)}
                        </select>
                      </div>
                      <div>
                        <label style={labelStyle}>Team size</label>
                        <select required style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }} value={form.teamSize} onChange={set('teamSize')}
                          onFocus={e => e.target.style.borderColor = 'var(--gbt-brand-amber)'}
                          onBlur={e => e.target.style.borderColor = 'var(--gbt-hairline)'}>
                          <option value="">Select…</option>
                          {teamSizes.map(t => <option key={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label style={labelStyle}>What's your biggest operational challenge right now?</label>
                      <textarea required rows={4}
                        style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                        value={form.challenge} onChange={set('challenge')}
                        onFocus={e => e.target.style.borderColor = 'var(--gbt-brand-amber)'}
                        onBlur={e => e.target.style.borderColor = 'var(--gbt-hairline)'}
                      />
                    </div>

                    {/* Big submit button */}
                    <button
                      type="submit"
                      className="gbt-btn gbt-btn-primary"
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                        fontSize: '1.0625rem',
                        fontWeight: 600,
                        padding: '1.0625rem 2rem',
                        cursor: submitting ? 'not-allowed' : 'pointer',
                        opacity: submitting ? 0.7 : 1,
                        border: 'none',
                        letterSpacing: '0.01em',
                      }}
                      disabled={submitting}
                    >
                      {submitting ? 'Sending…' : 'Request $497 Assessment'}
                      {!submitting && <ArrowRight size={18} strokeWidth={2} />}
                    </button>

                    {/* Guarantee note */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                      <ShieldCheck size={15} color="var(--gbt-sage)" strokeWidth={1.75} style={{ flexShrink: 0, marginTop: '0.1rem' }} />
                      <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '0.8rem', color: 'var(--gbt-ink-muted)', lineHeight: 1.55 }}>
                        Honest assessment guaranteed. If we find nothing worth automating, we'll tell you before you spend another dollar.
                      </p>
                    </div>

                    <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '0.8125rem', color: 'var(--gbt-ink-muted)' }}>
                      No spam. No hard sells. Just a real conversation about your business.
                    </p>
                  </form>
                )}
              </div>

              {/* ── Right: What you get + contact ── */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                {/* Numbered what-you-get */}
                <div style={{ padding: '2rem', borderRadius: 12, background: '#fff', border: '1px solid var(--gbt-hairline)' }}>
                  <h3 style={{ fontFamily: 'var(--font-newsreader)', fontSize: '1.125rem', color: 'var(--gbt-ink)', marginBottom: '1.5rem', fontWeight: 400 }}>
                    What's included
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
                    {expects.map(({ step, title, detail }) => (
                      <div key={step} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                        <span style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.6875rem',
                          color: 'var(--gbt-brand-amber)',
                          background: 'var(--gbt-brand-amber-subtle)',
                          border: '1px solid rgba(217,119,66,0.15)',
                          borderRadius: 4,
                          padding: '0.15rem 0.4rem',
                          flexShrink: 0,
                          marginTop: '0.15rem',
                          letterSpacing: '0.04em',
                        }}>
                          {step}
                        </span>
                        <div>
                          <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '0.875rem', fontWeight: 500, color: 'var(--gbt-ink)', marginBottom: '0.2rem' }}>
                            {title}
                          </p>
                          <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '0.8125rem', color: 'var(--gbt-ink-muted)', lineHeight: 1.5 }}>
                            {detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact info */}
                <div style={{ padding: '1.5rem', borderRadius: 12, background: '#fff', border: '1px solid var(--gbt-hairline)', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <Mail size={15} color="var(--gbt-brand-amber)" strokeWidth={1.75} />
                    <a href="mailto:hello@getbacktime.co" style={{ fontFamily: 'var(--font-hanken)', fontSize: '0.875rem', color: 'var(--gbt-ink-muted)', textDecoration: 'none' }}>
                      hello@getbacktime.co
                    </a>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <Clock size={15} color="var(--gbt-brand-amber)" strokeWidth={1.75} />
                    <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '0.875rem', color: 'var(--gbt-ink-muted)' }}>
                      45–60 min via video call
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Is this right for you? ── */}
        <section style={{ background: '#fff', padding: '5rem 0', borderTop: '1px solid var(--gbt-hairline)', borderBottom: '1px solid var(--gbt-hairline)' }}>
          <div className="gbt-container">
            <div style={{ maxWidth: 560, marginBottom: '3rem' }}>
              <p className="gbt-eyebrow" style={{ marginBottom: '1rem' }}>Before you book</p>
              <h2 className="gbt-display gbt-h2" style={{ color: 'var(--gbt-ink)' }}>
                Is this right for you?
              </h2>
            </div>

            <style>{`@media(max-width:768px){.fit-grid{grid-template-columns:1fr !important}}`}</style>
            <div className="fit-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>

              {/* Good fit */}
              <div style={{ padding: '2rem', borderRadius: 12, background: 'rgba(94,124,110,0.05)', border: '1px solid rgba(94,124,110,0.2)' }}>
                <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gbt-sage)', marginBottom: '1.25rem' }}>
                  This is for you if…
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {goodFit.map(item => (
                    <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(94,124,110,0.12)', border: '1px solid rgba(94,124,110,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '0.1rem' }}>
                        <Check size={11} color="var(--gbt-sage)" strokeWidth={2.5} />
                      </span>
                      <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '0.875rem', color: 'var(--gbt-ink-muted)', lineHeight: 1.55 }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Not a fit */}
              <div style={{ padding: '2rem', borderRadius: 12, background: 'rgba(184,92,71,0.04)', border: '1px solid rgba(184,92,71,0.15)' }}>
                <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#B85C47', marginBottom: '1.25rem' }}>
                  This isn't for you if…
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {notFit.map(item => (
                    <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(184,92,71,0.08)', border: '1px solid rgba(184,92,71,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '0.1rem' }}>
                        <X size={10} color="#B85C47" strokeWidth={2.5} />
                      </span>
                      <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '0.875rem', color: 'var(--gbt-ink-muted)', lineHeight: 1.55 }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Cal.com booking ── */}
        <section style={{ background: 'var(--gbt-dusk)', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
          <div className="noise-overlay" />
          <div className="gbt-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: 560, marginBottom: '3rem' }}>
              <p className="gbt-eyebrow gbt-eyebrow-amber" style={{ marginBottom: '1rem' }}>Skip the form</p>
              <h2 className="gbt-display gbt-h2" style={{ color: '#fff', marginBottom: '1rem' }}>
                Pick a time that works for you.
              </h2>
              <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '1rem', color: 'var(--gbt-on-dark-muted)', lineHeight: 1.65 }}>
                Choose a slot and we'll confirm your assessment session. No back-and-forth.
              </p>
            </div>
            <style>{`@media(max-width:640px){.cal-iframe{height:520px !important}}`}</style>
            <div style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', background: '#fff' }}>
              <iframe
                className="cal-iframe"
                src={`${CAL_LINK}?embed=true`}
                width="100%"
                height="650"
                frameBorder="0"
                title="Book your assessment"
                style={{ display: 'block' }}
              />
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ background: 'var(--gbt-canvas)', padding: '6rem 0' }}>
          <div className="gbt-container" style={{ maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
            <p className="gbt-eyebrow" style={{ marginBottom: '1rem' }}>Common questions</p>
            <h2 className="gbt-display gbt-h2" style={{ color: 'var(--gbt-ink)', marginBottom: '3rem' }}>
              What people ask before booking.
            </h2>
            <div>
              {faqs.map(({ q, a }, i) => (
                <div key={i} style={{ borderTop: '1px solid var(--gbt-hairline)', ...(i === faqs.length - 1 ? { borderBottom: '1px solid var(--gbt-hairline)' } : {}) }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '1.375rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', textAlign: 'left' }}
                  >
                    <span style={{ fontFamily: 'var(--font-newsreader)', fontSize: '1.0625rem', color: 'var(--gbt-ink)', fontWeight: 400, lineHeight: 1.35 }}>
                      {q}
                    </span>
                    <span style={{
                      flexShrink: 0, width: 24, height: 24, borderRadius: '50%',
                      background: openFaq === i ? 'var(--gbt-brand-amber)' : 'transparent',
                      border: `1px solid ${openFaq === i ? 'var(--gbt-brand-amber)' : 'var(--gbt-hairline)'}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 200ms ease',
                      color: openFaq === i ? '#fff' : 'var(--gbt-ink-muted)',
                      fontSize: '1rem', lineHeight: 1,
                    }}>
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div style={{ paddingBottom: '1.375rem' }}>
                      <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '0.9375rem', color: 'var(--gbt-ink-muted)', lineHeight: 1.7 }}>
                        {a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
