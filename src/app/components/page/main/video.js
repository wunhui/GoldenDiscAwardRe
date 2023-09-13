'use client'
import '@/app/scss/page/main/mainVideo.scss'
import MoreButton from '@/app/components/common/MoreButton';
import { useRouter } from 'next/navigation';
export default function video() {
  const Router = useRouter()
  function handleLinkPush() {
    Router.push('/Video')
  }
  return (
    <section className='video section-bottom_lg'>
      <div className='video-wrap'>
        <div className='video-title'>
          <h3>골든디스크어워즈 비디오</h3>
          <div className='pc'>
          <MoreButton handleClick={() => {handleLinkPush()}} />
          </div>
        </div>
        <div className='video-gallery'>
          <div className='video-gallery-wrap'>
            <div className='video-gallery-list left'>
              <img src='https://fs.jtbc.co.kr/joydata/CP00000001/prog/enter/goldendisc2020/img/20230108_002552_147_1.jpg' />
              <div className='text-wrap'>
                <p>[명장면 클립]</p>
                <p className='title'>[제37회 골든디스크] 음반 부문 대상 - 방탄소년단｜JTBC 230107 방송</p>
              </div>
            </div>
            <ul className='video-gallery-list right'>
              <li className='video-gallery-list_item'>
                <img src="https://fs.jtbc.co.kr/joydata/CP00000001/prog/enter/goldendisc2020/img/20230108_002312_951_1.jpg" />
                <div className='text-wrap'>
                  <p>[명장면 클립]</p>
                  <p className='title'>[제37회 골든디스크] 음반 부문 대상 시상자 - 홍정도 & 송중기｜JTBC 230107 방송</p>
                </div>
              </li>
              <li className='video-gallery-list_item'>
                <img src="https://fs.jtbc.co.kr/joydata/CP00000001/prog/enter/goldendisc2020/img/20230108_002053_077_1.jpg" />
                <div className='text-wrap'>
                  <p>[명장면 클립]</p>
                  <p className='title'>[제37회 골든디스크] 디지털 음원 부문 대상 - IVE｜JTBC 230107 방송</p>
                </div>
              </li>
              <li className='video-gallery-list_item'>
                <img src="https://fs.jtbc.co.kr/joydata/CP00000001/prog/enter/goldendisc2020/img/20230108_001832_011_1.jpg" />
                <div className='text-wrap'>
                  <p>[명장면 클립]</p>
                  <p className='title'>[제37회 골든디스크] 디지털 음원 부문 대상 시상자 - 이준호｜JTBC 230107 방송</p>
                </div>
              </li>
              <li className='video-gallery-list_item'>
                <img src="https://fs.jtbc.co.kr/joydata/CP00000001/prog/enter/goldendisc2020/img/20230108_001443_166_1.jpg" />
                <div className='text-wrap'>
                  <p>[명장면 클립]</p>
                  <p className='title'>[제37회 골든디스크] PSY - 'That That + 강남스타일' ♪｜JTBC 230107 방송</p>
                </div>
              </li>
            </ul>
          </div>
          <div className='mob'>
          <MoreButton handleClick={() => {handleLinkPush()}} />
          </div>
        </div>
      </div>
    </section>
  )
}