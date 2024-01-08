import type { Metadata } from 'next';
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Interview Spice',
  description: 'All the greatest spices',
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
