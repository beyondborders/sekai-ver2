import "../css/base.scss";
import { Shippori_Mincho } from 'next/font/google'
const shippori_mincho = Shippori_Mincho({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        
      </head>
      <body className={shippori_mincho.className}>
        {children}
      </body>
    </html>
  )
}