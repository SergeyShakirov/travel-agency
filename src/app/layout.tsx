import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EuroWork - Работа в Европе | Помощь в трудоустройстве',
  description: 'Профессиональная помощь в поиске работы и трудоустройстве в странах Европы. Легальное оформление, визовая поддержка, сопровождение.',
  keywords: 'работа в европе, трудоустройство, вакансии, виза, работа за границей',
  openGraph: {
    title: 'EuroWork - Работа в Европе',
    description: 'Помощь в трудоустройстве в европейских странах',
    url: 'https://eurowork.kz',
    siteName: 'EuroWork',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
