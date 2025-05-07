import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ClerkProvider } from '@clerk/nextjs'

import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { esES } from '@clerk/localizations';


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
  <ClerkProvider localization={esES}>
      <html lang="es">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-800  `}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
