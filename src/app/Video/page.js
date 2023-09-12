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

  const [value, setValue] = useState(0)
  const selectDatas = [
    {
      id: 1,
      value: 0,
      title: "2023년 37회"
    },
    {
      id: 2,
      value: 1,
      title: "2022년 36회"
    },
    {
      id: 3,
      value: 2,
      title: "2021년 35회"
    },
    {
      id: 4,
      value: 3,
      title: "2020년 34회"
    }
  ]
  function handleSelect(e) {
    setValue(e.target.value); 
    setCurrentTab(e.target.value);
    setLimit(10); 
    setData(list[e.target.value])
  }
  function handleClick(index) {
    setCurrentTab(index); 
    setLimit(10); 
    setData(list[index])
  }
  return (
    <div className="videos section-gap">
      <div className='videos-title'>
        <h3>수상자</h3>
      </div>
      <div className='videos-wrap'>
        <div className='mob'>
          <select className="select" onChange={(e) => {handleSelect(e)} }  value={value}>
              {
                selectDatas.map((item) => {
                  return (
                    <option key={item.id} value={item.value} >{item.title}</option>
                  )
                })
              }
            </select>
        </div>
        <div className='videos-tab pc'>
          <div className='videos-tab-wrap'>
            {
              datas.tabList.map((item, index) => {
                return (
                <button 
                  key={item.id}
                  onClick={() => {handleClick(index)} } 
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
