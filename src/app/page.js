"use client";
import './page.scss'
import Top from '@/app/components/page/main/top'
import Video from '@/app/components/page/main/video'
import Award from '@/app/components/page/main/award'
import Vote from '@/app/components/page/main/vote'
import Supporter from '@/app/components/page/main/supporter'
import { useEffect, useState } from 'react'
export default function Home() {
  const [isLoaing, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5400)
  })
  return (
    <div className={isLoaing ? 'is-loading' : ''}>
      {
        isLoaing 
        ? 
        <div className='dim'>
          <img src="/image/page/main.png" alt=""  />
          <strong>
            GOLDEN DISC AWARDS
          </strong>
        </div>
        : null
      }
        <Top />
        <Award />
        <Video />
        <Vote />
        <Supporter />
      </div>
  )
}
