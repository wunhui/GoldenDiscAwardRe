"use client"
import '@/app/scss/layouts/header.scss'
import { HiMenu } from "react-icons/hi";
import { BiX } from "react-icons/bi";
import Nav from './nav'
import Lang from './lang'
import Link from 'next/link'
import { useState } from 'react';
import { usePathname } from 'next/navigation';
export default function Header() {
  const pathname = usePathname() 
  const [mMenu, setMmenu] = useState(false)
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

  function handleCloseMenu() {
    document.querySelector('.l-container').style.overflow = 'auto'
    setMmenu(false)
  }
  function handleCloseTineMenu() {
    setTimeout(() => {
      document.querySelector('.l-container').style.overflow = 'auto'
      setMmenu(false)
    }, 500)
  }
  function handleOnMenu(){
    setMmenu(true)
    document.querySelector('.l-container').style.overflow = 'hidden'
  }
  return (
    <header className="l-header">
      <div className="header-wrap">
        <div className='mob'>
          {
            pathname.length > 1 &&
              <h1 className="logo">
                <Link href="/">
                  <img src='/image/common/la_logo.png' />
                </Link>
              </h1>
          }
        </div>
        <div className='pc'>
          <h1 className="logo">
            <Link href="/">
              <img src='/image/common/la_logo.png' />
            </Link>
          </h1>
        </div>
        <div className='header-content'>
          <Nav/>
          <Lang/>
          <button className='l-menu' onClick={handleOnMenu}>
            <HiMenu />
          </button>
          {
            mMenu === true ? <div className='m-menu'>
              <div className='menu-top'>
                <button onClick={handleCloseMenu}>
                  <BiX />
                </button>
              </div>
              <ul className='menu-wrap'>
                {
                  linkList.map((item) => {
                    return (
                      <li className='menu-list' key={item.id}>
                        <Link href={item.path} onClick={handleCloseTineMenu}>
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    )
                  })
                }
              </ul>
          </div> : false
          }
        </div>
      </div>
    </header>
  )
}