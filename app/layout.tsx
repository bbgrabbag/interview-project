import type { Metadata } from 'next';
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Interview Spice - Home',
  description: 'All the greatest spices',
  keywords: ['baking', 'cooking', 'spices'],
  icons: '/spice-icon.png',
  metadataBase: new URL('https://production-site.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Interview Spice - Home',
    description: 'All the greatest spices',
    siteName: 'TOMO interview',
    images: '/spice-icon.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Link href='/'>Home</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
