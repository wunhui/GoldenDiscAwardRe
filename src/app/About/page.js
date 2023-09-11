import '@/app/scss/page/about.scss'
import Link from 'next/link'
export default function About() {

  return (
    <div className="about section-gap">
      <div className='about-title'>
        <h3>시상식 소개</h3>
      </div>
      <div className='about-wrap'>
        <div className='about-desc'>
          <p className='about-desc_t'>공정하고 객관적인 최고 권위의 대중음악시상식</p>
          <p className='about-desc_b'>골든디스크어워즈는 한 해 동안 대중에게 큰 사랑을 받은 대한민국 대중음악을 선정, 결산하는 무대입니다.<br/>
1986년 제1회 개최 이래 공정성과 객관성, 권위를 인정받아 '가수들이 가장 받고 싶어하는 상'으로 자리매김 했습니다.<br/>
한 해 동안 발매된 음반 판매량과 디지털음원 이용량에 가장 중요한 비중을 두고<br/>
업계 전문가의 공정한 평가로 수상자를 결정함으로써<br/>
그 어떤 시상식보다 아티스트와 대중으로부터 큰 신뢰와 권위를 얻고 있는 시상식으로 평가받고 있습니다.</p>
        </div>
        <div className='about-visual'>
          <div className='about-visual-wrap'>
            <img src='/image/page/about/visual-intro.png'/>
          </div>
        </div>
        <div className='about-info'>
          <div className='about-info_t'>
            <h6>제37회 골든디스크어워즈 with 틱톡 _</h6>
          </div>
          <div className='about-info-wrap'>
            <dl className='about-info-list'>
              <dt className='about-info-list_title'>일정</dt>
              <dd className='about-info-list_desc'>2023년 1월 7일 (토) 오후 8시</dd>
              <dt className='about-info-list_title'>장소</dt>
              <dd className='about-info-list_desc'>
                <p>태국 방콕 라자망갈라 스타디움</p>
              </dd>
              <dt className='about-info-list_title'></dt>
              <dd className='about-info-list_desc'>
                  <img src='/image/page/about/GOOGLEMAP.png' />
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
