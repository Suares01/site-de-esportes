import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Line FUT',
  description: 'Notícias de futebol',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white">
          <div
            className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8"
          >
            <Link className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <Image
                src="/logo.jpeg"
                alt="Logo"
                height={64}
                width={64}
              />
            </Link>

            <div className="flex flex-1 items-center justify-end md:justify-between">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link className="text-gray-500 transition hover:text-gray-500/75" href="/jogos">
                      Jogos
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        {children}
        <footer className="bg-gray-100">
          <div
            className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24"
          >
            <div className="lg:flex lg:items-end lg:justify-between">
              <div>
                <div className="flex justify-center text-teal-600 lg:justify-start">
                  <Image
                    src="/logo.jpeg"
                    alt="Logo"
                    height={64}
                    width={64}
                  />
                </div>

                <p
                  className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left"
                >
                  Line FUT. O melhor site se notícias da atualidade.
                </p>
              </div>
            </div>

            <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
              Copyright &copy; 2023. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
