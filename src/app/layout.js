import { getCssText } from '../styles'
import { Poppins } from 'next/font/google'
import {globalStyles} from "../styles/global"
import { Header } from '../components/Header'
import { Footer } from '../components/footer'
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '600', '700']
})

export const metadata = {
  title: 'What if?',
  description: 'Projeto destinado ao curso do codeboost.',
}
globalStyles();
export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText()} }></style>
      </head>
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
