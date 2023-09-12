'use client'
import '@/app/scss/page/history.scss';
import { useState } from 'react'
import Year1980 from '@/app/components/page/history/1980'
import Year1990 from '@/app/components/page/history/1990'
import Year2000 from '@/app/components/page/history/2000'
import Year2010 from '@/app/components/page/history/2010'
import Year2020 from '@/app/components/page/history/2020'
export default function History() {
  const [currentTab, setCurrentTab] = useState(0)
  const [value, setValue] = useState(0)
  const selectDatas = [
    {
      id: 1,
      value: 0,
      title: "34~36회(2020년대)"
    },
    {
      id: 2,
      value: 1,
      title: "25~33회(2010년대)"
    },
    {
      id: 3,
      value: 2,
      title: "15~24회(2000년대)"
    },
    {
      id: 4,
      value: 3,
      title: "5~14회(1990년대)"
    },
    {
      id: 5,
      value: 4,
      title: "1~4회(1980년대)"
    }
  ]
  const datas = [
    {
      id: 1,
      title: "34~36회(2020년대)"
    },
    {
      id: 2,
      title: "25~33회(2010년대)"
    },
    {
      id: 3,
      title: "15~24회(2000년대)"
    },
    {
      id: 4,
      title: "5~14회(1990년대)"
    },
    {
      id: 5,
      title: "1~4회(1980년대)"
    }
  ]
  const list = {
    0: Year2020,
    1: Year2010, 
    2: Year2000, 
    3: Year1990, 
    4: Year1980
  }
  const [content, setContent] = useState(list[0])
  function handleSelect(e) {
    setValue(e.target.value);
    setContent(list[e.target.value])
  }
  function handleClick(index) {
    setCurrentTab(index);
    setContent(list[index]);
  }
  return (
    <div className="history section-gap">
      <div className='history-title'>
        <h3>역대수상</h3>
      </div>
      <div className='history-wrap'>
      <div className='history-tab pc'>
        <div className='history-tab-wrap'>
          {
            datas.map((item, index) => {
              return (
              <button 
                key={item.id}
                onClick={() => {handleClick(index);}} 
                className={`${currentTab === index ? 'green' : ''} ${'history-tab-list'}`}
              >
                {item.title}
              </button>
              )
            })
          }
        </div>
      </div>
      <div className='mob'>
        <select className="select" onChange={(e) => {handleSelect(e)}}  value={value}>
          {
            selectDatas.map((item) => {
              return (
                <option key={item.id} value={item.value} >{item.title}</option>
              )
            })
          }
        </select>
        </div>
        {content}
      </div>
    </div>
  )
}
