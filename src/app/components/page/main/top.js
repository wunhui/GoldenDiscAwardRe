import '@/app/scss/page/main/top.scss'
export default function top() {
  return (
    <>
      <div className='top section-bottom_lg'>
        <div className="top-wrap">
          <div className='top-title_t'>
            <p>GOLDEN DISC<br/>AWARDS</p>
            <p className='date'>2023.01.07</p>
          </div>
          <div className="top-img">
            <div className='img-wrap'>
              <div className="img-content">
                <img src="/image/page/main.png" alt=""  />
              </div>
            </div>
          </div>
          <div className="top-title_b">
            Golden Disc Awards, the most fair and prestigious awards ceremony,<br/>
            widely presented annually to recognize the outstanding achievements of K-POP industry
          </div>
        </div> 
      </div>
    </>
  )
}