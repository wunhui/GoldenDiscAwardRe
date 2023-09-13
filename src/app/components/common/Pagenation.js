'use client'
import '@/app/scss/components/pagenation.scss'
import Pagination from "react-js-pagination";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { useState } from 'react';


export default function Pagenation({activePage, handlePageChange}) {
  const datas = require('/public/data/notice_data.json')
return (
    <Pagination
      activePage={activePage} // 현재 페이지
      itemsCountPerPage={10} // 한 페이지랑 보여줄 아이템 갯수
      totalItemsCount={datas.length} // 총 아이템 갯수
      pageRangeDisplayed={10} // paginator의 페이지 범위
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
    />
  )
}
