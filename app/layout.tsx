import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify';
import { GoogleOAuthProvider } from '@react-oauth/google'

import './globals.css'
import 'react-toastify/dist/ReactToastify.css';

import Header from '@/components/layout/header';
import LoginModal from '@/components/shared/modals/LoginModal'
import RegisterModal from '@/components/shared/modals/RegisterModal'
import AllFeaturesModal from '@/components/shared/modals/AllFeaturesModal'
import ThemeProvider from '@/components/shared/theme/theme-provider';
import CreatePropertyModal from '@/components/shared/modals/CreatePropertyModal';
import ReduxProvider from '@/redux/ReduxProvider';
import Footer from '@/components/layout/footer';

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
      <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID as string}>
        <body className={inter.className}>
          <ReduxProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              >
              <Header />
              <LoginModal />
              <RegisterModal />
              <AllFeaturesModal />
              <ToastContainer />
              <CreatePropertyModal />
              {children}
              <Footer />
            </ThemeProvider>
          </ReduxProvider>
        </body>
      </GoogleOAuthProvider>
    </html>
  )
}
