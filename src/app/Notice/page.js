"use client"
import '@/app/scss/page/notice.scss'
import noticeList from "public/data/notice_data"
import Link from "next/link";
import Pagination from "@/app/components/common/Pagenation";
import { useState } from 'react';
import { usePathname } from 'next/navigation';
export default function NoticePage() {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10)
  const [activePage, setActivePage] = useState(1);
  
  const pathname = usePathname()
  const handlePageChange = (activePage) => {
    setActivePage(activePage)
    setPage(activePage * 10 - 10)
    setLimit(activePage * 10)
  }
  return(
    <div className="notice section-gap">
      <div className='notice-title'>
        <h3>
          공지사항
        </h3>
        <p className='notice-table-title'>골든디스크어워즈의 새로운 소식을 전해드립니다.</p>
      </div>
      <div className="notice-table">
        <div className='notice-table-wrap'>
          <table>
            <colgroup>
              <col width="10%" />
              <col width="70%" />
              <col width="20%" />
            </colgroup>
            <tbody>
              <tr>
                <th>NO</th>
                <th>제목</th>
                <th>날짜</th>
              </tr>
              {
                noticeList.slice(page, limit).map((item,id) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    {/* <td><Link href={`/Notice/${item.id}`}>{item.title}</Link></td> */}
                    <td><Link href={{
                      pathname: `/Notice/${item.id}`
                    }}
                    >{item.title}</Link></td>
                    <td>{item.date}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        <Pagination
          activePage={activePage} // 현재 페이지
          handlePageChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
        />
        </div>
      </div>
    </div>
  )
}