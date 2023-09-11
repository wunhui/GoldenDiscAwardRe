"use client"

import '@/app/scss/page/winner.scss'
import { useState } from 'react'
export default function Winners() {
  const datas = require('/public/data/winner_data.json')
  const [currentTab, setCurrentTab] = useState(0)
  const [data, setData] = useState(datas.soundSource)
  return (
    <div className="winner section-gap">
      <div className='winner-title'>
        <h3>수상자</h3>
      </div>
      <div className='winner-wrap'>
        <div className='winner-tab'>
          <div className='winner-tab-wrap'>
            <button onClick={() => {setCurrentTab(0); setData(datas.soundSource)}} 
              className={`${currentTab === 0 ? 'blue' : ''} ${'winner-tab-list'}`}
            >
              디지털 음원 부문
            </button>
            <button onClick={() => {setCurrentTab(1); setData(datas.record)}} 
              className={`${currentTab === 1 ? 'green' : ''} ${'winner-tab-list'}`}
            >
              음반 부문
            </button>
          </div>
        </div>
        <div className='winner-content'>
          {
            data.map((item, index) => {
              if(item.id === 1) {                
                return (
                  <div className={`winner-content_l ${currentTab === 0 ? 'blue' : 'green'}`}>
                    <div className='img-wrap'>
                      <img src={item.url} />
                    </div>
                    <div className='text-wrap'>
                      <span className='title'>{item.title}</span>
                      <span className='group-name'>{item.groupName}</span>
                      <span className='song-name'>{item.songName}</span>
                    </div>
                  </div>
                )
              }
            })
          }
          <div className='winner-content_r'>
            <ul className='winner-content-wrap'>
              {
                data.map(item => {
                  return (
                      <li className='winner-content-list'>
                        <div className='img-wrap'>
                          <img src={item.url} />
                        </div>
                        <div className='text-wrap'>
                          <p className='title'>{item.title}</p>
                          <p className='group-name'>{item.groupName}</p>
                          <p className='song-name'><span>앨범</span>{item.songName}</p>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
        </div>
      </div>
    </div>
  )
}
