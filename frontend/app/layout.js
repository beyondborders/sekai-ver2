import "../css/base.scss";
import { Zen_Old_Mincho } from 'next/font/google'
const shippori_mincho = Zen_Old_Mincho({
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