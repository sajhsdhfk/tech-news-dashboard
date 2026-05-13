import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tech News Dashboard',
  description: 'Daily updated tech news and trending repositories from GitHub',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
