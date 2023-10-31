import "../css/base.scss";
// import { Noto_Serif_JP } from 'next/font/google'
// const noto = Noto_Serif_JP({
//   weight: ['400'],
//   subsets: ["latin"],
//   display: 'swap'
// })
import localFont from 'next/font/local'
const notoLocal = localFont({
  src: [
    {
      path: '../fonts/NotoSerifJP-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/NotoSerifJP-Medium.otf',
      weight: '500',
      style: 'bold',
    },
    {
      path: '../fonts/NotoSerifJP-SemiBold.otf',
      weight: '600',
      style: 'bolder',
    },
  ],
})

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        
      </head>
      <body className={notoLocal.className}>
        {children}
      </body>
    </html>
  )
}