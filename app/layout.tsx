import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify';

import './globals.css'
import 'react-toastify/dist/ReactToastify.css';

import Header from '@/components/shared/header/Header'
import SearchModal from '@/components/shared/modals/SearchModal'
import LoginModal from '@/components/shared/modals/LoginModal'
import RegisterModal from '@/components/shared/modals/RegisterModal'
import AllFeaturesModal from '@/components/shared/modals/AllFeaturesModal'

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
        <LoginModal />
        <RegisterModal />
        <AllFeaturesModal />
        <ToastContainer />
        {children}
      </body>
    </html>
  )
}
