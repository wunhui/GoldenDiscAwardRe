import '@/app/scss/layouts/nav.scss'
import Link from 'next/link'
export default function Nav() {
  return (
    <>
      <nav className='l-nav'>
        <ul className='nav-wrap'>
          <li className='nav-list'>
            <Link href={'/About'}>
              <span>시상식 소개</span>
            </Link>
          </li>
          <li className='nav-list'>
          <Link href={'/Award'}>
            <span>시상부문</span>
          </Link>
          </li>
          <li className='nav-list'>
          <Link href={'/Winners'}>
            <span>37회 수상자</span>
          </Link>
          </li>
          <li className='nav-list'>
            <Link href={'/History'}>
              <span>역대 수상</span>
            </Link>
          </li>
          <li className='nav-list'>
            <Link href={'/Video'}>
              <span>다시보기</span>
            </Link>
          </li>
          <li className='nav-list'>
            <Link href={'/Notice'}>
              <span>공지사항</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}