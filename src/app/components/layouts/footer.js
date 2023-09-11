import '@/app/scss/layouts/footer.scss'
export default function footer() {

  return (
    <div className="footer">
      <h1><img src="https://www.goldendisc.co.kr/static/media/footer_logo.c9afaba6.png" /></h1>
      <div className='sns'>
        <ul className='sns-wrap'>
          <li className='sns-list'>
            <img src="/image/common/footer/instra.png" />
          </li>
          <li className='sns-list'>
            <img src="/image/common/footer/facebook.png" />
          </li>
          <li className='sns-list'>
            <img src="/image/common/footer/twitter.png" />
          </li>
        </ul>
      </div>
    </div>
  )
}
