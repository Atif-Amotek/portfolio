import './globals.css'
import type { Metadata } from 'next'
import { Press_Start_2P, Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Analytics } from "@vercel/analytics/react"

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Atif Khalil - Full Stack Developer',
  description: 'Full Stack Developer specializing in TypeScript, Next.js, and modern web technologies',
  keywords: ['Full Stack Developer', 'TypeScript', 'Next.js', 'React', 'Web Development'],
  authors: [{ name: 'Atif Khalil' }],
  openGraph: {
    title: 'Atif Khalil - Full Stack Developer',
    description: 'Full Stack Developer specializing in TypeScript, Next.js, and modern web technologies',
    type: 'website',
  },
}

const Layout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth dark">
      <body className={`${inter.variable} ${pressStart2P.variable} min-h-screen bg-white font-sans antialiased dark:bg-neutral-900`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

export default Layout;