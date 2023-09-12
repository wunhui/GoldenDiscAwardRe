"use client"

import '@/app/scss/page/winner.scss'
import { useState } from 'react'
export default function Winners() {
  const datas = require('/public/data/winner_data.json')
  const [data, setData] = useState(datas.soundSource)
  const [currentTab, setCurrentTab] = useState(0)

  const buttons = [
    {
      id: 1,
      title: '디지털 음원 부문',
      color: 'blue',
      data: datas.soundSource
    },
    {
      id: 2,
      title: '음반 부문',
      color: 'green',
      data: datas.record
    }
  ]

  function handleClick(item, index) {
    setCurrentTab(index); setData(item.data);
  }

  return (
    <div className="winner section-gap">
      <div className='winner-title'>
        <h3>수상자</h3>
      </div>
      <div className='winner-wrap'>
        <div className='winner-tab'>
          <div className='winner-tab-wrap'>
            {
              buttons.map((item, index) => {
                return (
                  <button key={item.id} onClick={() => {handleClick(item, index);}} 
                    className={`${currentTab === index && item.color} ${'winner-tab-list'}`}
                  >
                    { item.title }
                  </button>
                )
              })
            }
          </div>
        </div>
        <div className='winner-content'>
          {
            data.map((item, index) => {
              if(item.id === 1) {                
                return (
                  <div key={item.id} className={`winner-content_l ${currentTab === 0 ? 'blue' : 'green'}`}>
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
                      <li key={item.id} className='winner-content-list'>
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
