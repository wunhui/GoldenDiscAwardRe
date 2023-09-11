"use client"
import '@/app/scss/layouts/nav.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
export default function Nav() {
  const pathname = usePathname()
  console.log(pathname)
  const linkList = [
    {
      id: 1,
      title: '시상식 소개',
      path: '/About'
    },
    {
      id: 2,
      title: '시상부문',
      path: '/Award'
    },
    {
      id: 3,
      title: '37회 수상자',
      path: '/Winners'
    },
    {
      id: 4,
      title: '역대수상',
      path: '/History'
    },
    {
      id: 5,
      title: '다시보기',
      path: '/Video'
    },
    {
      id: 6,
      title: '공지사항',
      path: '/Notice'
    }
  ]
  return (
    <>
      <nav className='l-nav'>
        <ul className='nav-wrap'>
          {
            linkList.map((item) => {
              return (
                <li className={`${'nav-list'} ${item.path === pathname ? 'active': ''}`} key={item.id}>
                  <Link href={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </>
  )
}