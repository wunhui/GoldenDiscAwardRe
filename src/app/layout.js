import { Noto_Sans_KR } from 'next/font/google'
import Header from '@/app/components/layouts/header'
import Footer from '@/app/components/layouts/footer'
import '@/app/scss/common/reset.scss'

const notoSansKr = Noto_Sans_KR({
  weight: ['400'],
  subsets: ['latin'],
});



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={ notoSansKr.className }>
        <div className='l-container'>
          <div className='l-wrap'>
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
