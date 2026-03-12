import type { Metadata } from 'next'
import { Montserrat, JetBrains_Mono, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500', '700'],
  display: 'swap',
  preload: true,
});

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'NPS 2026 - National Pre-Retirement Summit',
  description: 'Own Your Retirement: From Planning to Action. Nigeria\'s premier platform for retirement readiness, financial security, and post-career productivity. July 15-17, 2026 in Abuja.',
  keywords: ['retirement', 'pension', 'Nigeria', 'Africa', 'financial planning', 'NPS 2026', 'pre-retirement'],
  openGraph: {
    title: 'NPS 2026 - National Pre-Retirement Summit',
    description: 'Own Your Retirement: From Planning to Action. July 15-17, 2026 in Abuja, Nigeria.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://pulocfsnftbohjbwqbhv.supabase.co" />
        {/* Explicit favicon links to ensure browsers use the provided icon */}
        <link rel="icon" href="/icon-dark-32x32.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-dark-32x32.png" />
        <link rel="shortcut icon" href="/icon-dark-32x32.png" />
        <link rel="mask-icon" href="/icon.svg" color="#016633" />
        <meta name="theme-color" content="#016633" />
      </head>
      <body className={`${montserrat.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
