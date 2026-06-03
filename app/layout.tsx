import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GetBackTime — Get back the hours your business keeps eating',
  description:
    'We sit with you for an hour, watch how your week actually runs, and hand back a list of the repetitive work worth automating — and the work that isn\'t.',
  openGraph: {
    title: 'GetBackTime',
    description: 'Get back the hours your business keeps eating.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
