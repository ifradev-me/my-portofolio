import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Ifrad — Front-End Developer & WhatsApp Automation Builder',
    template: '%s | Ifrad',
  },
  description:
    'Portofolio Ifradil Syaifa — bantu UMKM bangun website cepat & sistem otomatisasi WhatsApp untuk penjualan yang terukur.',
  keywords: [
    'Ifrad', 'Ifradil Syaifa', 'Front-End Developer',
    'WhatsApp Automation', 'Jasa Website UMKM', 'Next.js', 'Aceh',
  ],
  authors: [{ name: 'Ifradil Syaifa' }],
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    title: 'Ifrad — Front-End Developer & WhatsApp Automation Builder',
    description:
      'Bangun websitemu & sistem otomatisasi WhatsApp untuk penjualan yang cepat, mudah, dan terukur.',
    siteName: 'Ifrad Dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ifrad — Front-End Developer & WhatsApp Automation Builder',
    description:
      'Bangun websitemu & sistem otomatisasi WhatsApp untuk penjualan yang cepat, mudah, dan terukur.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
