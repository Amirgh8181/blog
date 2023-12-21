"use client"
import { Spline_Sans } from 'next/font/google'
import { NextAuthProvider } from 'context/next-auth';
import { NextUiProviders } from '../context/next-ui';
import { NextThemeProvider } from "../context/next-theme";
import { usePathname } from 'next/navigation';
import '@/styles/globals.css'
import Footer from '@/components/footer';
import NavBar from '@/components/navbar';

const spline_sans = Spline_Sans({
  subsets: ['latin'],
  variable: '--font-spline-sans',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname()
  return (
    <html lang="en">
      <body className="w-full min-h-screen dark:bg-[#040D12] bg-white font-splinesans">
        <NextAuthProvider>
          <NextUiProviders>
            <NextThemeProvider>
              <nav className='w-full absolute top-8 z-40'>
                <NavBar />
              </nav>
              <main>
                <div className={`${pathname === '/' ? null : 'mt-20'}`}>
                  {children}
                </div>
              </main>
              <footer className='w-full md:h-24 bg-white dark:bg-black flex flex-col justify-center md:items-center md:flex-row border-t'>
                <Footer />
              </footer>
            </NextThemeProvider>
          </NextUiProviders>
        </NextAuthProvider>
      </body>
    </html>
  )
}