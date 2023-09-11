"use client"
import noticeList from "public/data/noticeDetails_data"
import '@/app/scss/page/notice.scss'
import {
  usePathname,
  useRouter
} from 'next/navigation';
import Link from "next/link";
export default function Notice1() {
  const pathname = usePathname();
  const router = useRouter();
  const regex = /[^0-9]/g;
  const result = pathname.replace(regex, "");
  const query = Number(result)
  return (
    <>
      <div className='notice-list-wrap section-gap'>
        <div className='notice-title'>
          <h3>
            공지사항
          </h3>
          <p>골든디스크어워즈의 새로운 소식을 전해드립니다.</p>
        </div>
        <div className="notice-list-title">
          {
            noticeList.map((item) => {
              console.log(item.id)
              return (
                item.id === query &&
                <table key={item.id} className='notice-list-table'>
                  <colgroup>
                    <col width="15%" />
                    <col width="85%" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>제목</th>
                      <td>{item.title}</td>
                    </tr>
                    <tr>
                      <td colSpan="2" className='notice-list-table-content' dangerouslySetInnerHTML={{__html: item.content}} />
                    </tr>
                  </tbody>
                </table>
              )
            })
          }
        </div>
        <table className='notice-list-table'>
          <colgroup>
            <col width="15%" />
            <col width="85%" />
          </colgroup>
          <tbody>
            <tr>
              <th>이전글 {}</th>
              <td>
                {
                  query - 1 === 0 ?
                      <span>이전 글이 없습니다.</span>
                   :
                  noticeList.map((item, idx) => {
                    return (
                      item.id === query &&
                        <Link key={item.id} href={`${item.id - 1}`}>{noticeList[idx - 1].title}</Link>
                      )
                    })
                }
              </td>
            </tr>
            <tr>
              <th>다음글</th>
              <td>
                {
                  query - 1 === noticeList.length -1 ?
                      <span>다음 글이 없습니다.</span>
                  : noticeList.map((item, idx) => {
                  return (
                    item.id === query &&
                    <Link key={item.id} href={`${item.id + 1}`}>{ noticeList[idx + 1].title }</Link>
                  )
                })
                }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}