import '@/app/scss/page/main/mainAward.scss'
import MoreButton from '@/app/components/common/MoreButton';
export default function award() {
  return (
    <section className='award section-bottom_lg'>
      <div className='award-wrap'>
        <div className='award-title'>
          <h3>제37회 골든디스크어워즈 수상자</h3>
          <MoreButton />
        </div>
        <div className='award-gallery'>
          <ul className='award-gallery-wrap'>
            <li className='award-gallery-list'>
              <img src="https://seoulberlindotcom.files.wordpress.com/2022/03/fb_img_1648655195100.jpg?w=1080" />
              <div className='text-wrap'>
                <p className='title'>디지털 음원 대상</p>
                <p className='name'>IVE</p>
                <p>곡명 LOVE DIVE</p>
              </div>
            </li>
            <li className='award-gallery-list'>
              <img src="https://cdnimg.melon.co.kr/resource/image/cds/musicstory/imgUrl20220609033846709.jpg" />
              <div className='text-wrap'>
                <p className='title'>음반 대상</p>
                <p className='name'>방탄소년단</p>
                <p>앨범 Proof</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}