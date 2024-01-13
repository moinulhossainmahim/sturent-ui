import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/shared/header/Header'
import SearchModal from '@/components/shared/modals/SearchModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'stuRENT',
  description: 'A room finding website for university students',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <SearchModal />
        {children}
      </body>
    </html>
  )
}
