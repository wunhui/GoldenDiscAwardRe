import '@/app/scss/layouts/header.scss'
import { HiMenu } from "react-icons/hi";
import Nav from './nav'
import Lang from './lang'
import Link from 'next/link'
export default function Header() {
  return (
    <header className="l-header">
      <div className="header-wrap">
        <h1 className="logo">
          <Link href="/">
            <img src='/image/common/la_logo.png' />
          </Link>
        </h1>
        <div className='header-content'>
          <Nav/>
          <Lang/>
          <button className='l-menu'>
            <HiMenu />
          </button>
        </div>
      </div>
    </header>
  )
}