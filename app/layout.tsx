import type { Metadata } from 'next'
import { Cormorant_Garamond, Assistant } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

const assistant = Assistant({
  variable: '--font-assistant',
  subsets: ['hebrew', 'latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mia-bridal.co.il'),
  title: {
    default: 'MIA — שמלות כלה | גן יבנה',
    template: '%s | MIA שמלות כלה',
  },
  description:
    'בית שמלות כלה MIA בגן יבנה — שמלות כלה יוקרתיות, עיצוב אישי ואינטימי. לתיאום פגישה: 054-5417717',
  keywords: ['שמלות כלה', 'MIA', 'גן יבנה', 'שמלות כלה יוקרתיות', 'בוטיק כלות'],
  authors: [{ name: 'MIA Bridal House' }],
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    siteName: 'MIA — שמלות כלה',
    title: 'MIA — שמלות כלה | גן יבנה',
    description:
      'בית שמלות כלה MIA בגן יבנה — שמלות כלה יוקרתיות, עיצוב אישי ואינטימי.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html
      lang="he"
      dir="rtl"
      className={`${cormorant.variable} ${assistant.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-white text-black antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  )
}
