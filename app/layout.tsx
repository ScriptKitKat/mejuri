import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "MeJurix - Revolutionizing Medical Records Summarization",
  description: "AI medical summaries for personal injury law firms, medical assessment, and insurance companies.",
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

