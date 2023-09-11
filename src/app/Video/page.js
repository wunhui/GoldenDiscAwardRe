"use client"
import '@/app/scss/page/video.scss'
import Link from 'next/link'
import { useState } from 'react'
export default function Video() {
  const datas = require('/public/data/video_data.json')
  const [currentTab, setCurrentTab] = useState(0)
  const [data, setData] = useState(datas.twentyThree)
  const [limit, setLimit] = useState(10)
  const list = {
      0: datas.twentyThree, 1: datas.twentyTwo, 2: datas.twentyOne, 3: datas.twenty
  }
  function handleClickTab() {
    console.log(list)
  }
  function handleClick() {
    if( limit <= data.length) {
      setLimit(limit + 10)
    }
  }
  return (
    <div className="videos section-gap">
      <div className='videos-title'>
        <h3>수상자</h3>
      </div>
      <div className='videos-wrap'>
        <div className='videos-tab'>
          <div className='videos-tab-wrap'>
            {
              datas.tabList.map((item, index) => {
                return (
                <button 
                  key={item.id}
                  onClick={() => {setCurrentTab(index), setLimit(10); setData(list[index])} } 
                  className={`${currentTab === index ? 'green' : ''} ${'videos-tab-list'}`}
                >
                  {item.title}
                </button>
                )
              })
            }
          </div>
        </div>
        <div className='videos-gallery'>
          <div className='videos-gallery-wrap'>
            <ul className='videos-gallery-list'>
              {
                data.map((item, index) => (
                  index < limit && <li key={item.id} className='videos-gallery-list_item'>
                      <Link href={item.link}>
                        <div className='img-wrap'>
                          <img src={item.img} />
                          <span className='time'>{item.time}</span>
                        </div>
                        <div className='text-wrap'>
                          <p>[명장면 클립]</p>
                          <p className='title'>{item.title}</p>
                        </div>
                      </Link>
                    </li>   
                ))
              }
            </ul>
          </div>
        </div>
        {
          limit <= data.length ? <button  onClick={handleClick} className='more-button'>
          더보기
          </button> : false
        }
      </div>
    </div>
  )
}
