import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Terms of Service — GetBackTime',
}

export default function TermsPage() {
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
            <h1 className="gbt-display gbt-h2" style={{ color: 'var(--gbt-ink)', marginBottom: '0.5rem' }}>Terms of Service</h1>
            <p style={{ ...prose, color: 'var(--gbt-ink-muted)', marginBottom: '3rem' }}>
              Last updated: May 2025
            </p>

            <p style={prose}>
              By engaging GetBackTime for an assessment or any follow-on services, you agree to the following terms.
            </p>

            <h2 style={h2Style}>Services</h2>
            <p style={prose}>
              GetBackTime provides operational workflow assessments and automation implementation services for small and medium-sized businesses. Specific deliverables and timelines are agreed upon at the point of engagement.
            </p>

            <h2 style={h2Style}>Assessment fee</h2>
            <p style={prose}>
              The one-time assessment fee is $497, payable before the engagement begins. This fee covers workflow review, opportunity mapping, written report, and a 60-minute readout session. It is non-refundable once the assessment work has commenced.
            </p>

            <h2 style={h2Style}>Deliverables and timelines</h2>
            <p style={prose}>
              We aim to deliver the written Automation Opportunity Report within 5–7 business days of the discovery call. Timelines may shift if additional information is required from your side. We will communicate any delays promptly.
            </p>

            <h2 style={h2Style}>Confidentiality</h2>
            <p style={prose}>
              All information you share about your business operations is treated as strictly confidential. We do not share, sell, or reference your business details without your explicit consent.
            </p>

            <h2 style={h2Style}>Honest recommendations</h2>
            <p style={prose}>
              Our assessments are independent and honest. If we determine that automation will not meaningfully benefit your operations, we will say so. This does not entitle you to a refund of the assessment fee, as the assessment itself is the service.
            </p>

            <h2 style={h2Style}>Limitation of liability</h2>
            <p style={prose}>
              GetBackTime is not liable for business outcomes resulting from decisions made based on our recommendations. Our reports are advisory in nature. Implementation results depend on factors outside our control.
            </p>

            <h2 style={h2Style}>Changes to these terms</h2>
            <p style={prose}>
              We may update these terms from time to time. Continued use of our services after changes are posted constitutes acceptance of the updated terms.
            </p>

            <h2 style={h2Style}>Contact</h2>
            <p style={prose}>
              Questions? Email us at{' '}
              <a href="mailto:hello@getbacktime.co" style={{ color: 'var(--gbt-brand-amber)', textDecoration: 'none' }}>
                hello@getbacktime.co
              </a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
