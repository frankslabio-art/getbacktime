import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy — GetBackTime',
}

export default function PrivacyPage() {
  const prose: React.CSSProperties = {
    fontFamily: 'var(--font-hanken)',
    fontSize: '0.9375rem',
    color: 'var(--gbt-ink-muted)',
    lineHeight: 1.75,
    marginBottom: '1.25rem',
  }
  const h2Style: React.CSSProperties = {
    fontFamily: 'var(--font-newsreader)',
    fontSize: '1.25rem',
    color: 'var(--gbt-ink)',
    fontWeight: 400,
    marginTop: '2.5rem',
    marginBottom: '0.75rem',
  }

  return (
    <>
      <Nav />
      <main style={{ background: 'var(--gbt-canvas)', paddingTop: 64 }}>
        <section style={{ padding: '5rem 0 7rem' }}>
          <div className="gbt-container" style={{ maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
            <p className="gbt-eyebrow" style={{ marginBottom: '1rem' }}>Legal</p>
            <h1 className="gbt-display gbt-h2" style={{ color: 'var(--gbt-ink)', marginBottom: '0.5rem' }}>Privacy Policy</h1>
            <p style={{ ...prose, color: 'var(--gbt-ink-muted)', marginBottom: '3rem' }}>
              Last updated: May 2025
            </p>

            <p style={prose}>
              GetBackTime ("we," "us," or "our") is committed to protecting your personal information. This policy explains what we collect, how we use it, and your rights.
            </p>

            <h2 style={h2Style}>Information we collect</h2>
            <p style={prose}>
              When you fill out our contact form or book an assessment, we collect your name, business email, business name, industry, team size, and the operational challenge you describe. We also collect basic usage data (pages visited, time on site) through standard analytics tools.
            </p>

            <h2 style={h2Style}>How we use it</h2>
            <p style={prose}>
              We use your information solely to respond to your enquiry, schedule and conduct your assessment, and send you relevant follow-up about our services. We do not sell your data to third parties. We do not send unsolicited marketing.
            </p>

            <h2 style={h2Style}>Data storage</h2>
            <p style={prose}>
              Your information is stored securely. We retain it only as long as necessary to deliver our services or as required by law. You can request deletion at any time by emailing us.
            </p>

            <h2 style={h2Style}>Third-party tools</h2>
            <p style={prose}>
              We use Cal.com for scheduling. Their privacy policy applies to any data you provide during booking. We may also use email delivery services (e.g., Gmail) to communicate with you.
            </p>

            <h2 style={h2Style}>Your rights</h2>
            <p style={prose}>
              You have the right to access, correct, or request deletion of your personal data at any time. To exercise these rights, contact us at frankslab.io@gmail.com.
            </p>

            <h2 style={h2Style}>Contact</h2>
            <p style={prose}>
              Questions about this policy? Email us at{' '}
              <a href="mailto:frankslab.io@gmail.com" style={{ color: 'var(--gbt-brand-amber)', textDecoration: 'none' }}>
                frankslab.io@gmail.com
              </a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
