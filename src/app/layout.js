import { getCssText } from '@/styles'
import { Poppins } from 'next/font/google'
import {globalStyles} from "../styles/global"
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
    <html lang="pt-br" as="style">
      <head>
        <style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText()} }></style>
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
