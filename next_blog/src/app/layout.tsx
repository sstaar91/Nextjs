import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import GlobalStyle from '@_styles/GlobalStyle'
import Nav from '@_components/Nav'

const noto = Noto_Sans_KR({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Step',
  description: 'Next Step Blog',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <GlobalStyle />
      <body className={noto.className}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
