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
  return (
    <div className="history section-gap">
      <div className='history-title'>
        <h3>역대수상</h3>
      </div>
      <div className='history-wrap'>
      <div className='history-tab'>
          <div className='history-tab-wrap'>
            {
              datas.map((item, index) => {
                return (
                <button 
                  key={item.id}
                  onClick={() => {setCurrentTab(index), setContent(list[index])} } 
                  className={`${currentTab === index ? 'green' : ''} ${'history-tab-list'}`}
                >
                  {item.title}
                </button>
                )
              })
            }
          </div>
        </div>
        {content}
      </div>
    </div>
  )
}
