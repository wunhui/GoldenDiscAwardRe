import '@/app/scss/page/main/mainVote.scss'
import Link from 'next/link'
export default function footer() {

  return (
    <div className="vote section-bottom_lg">
      <div className='vote-title'>
        <h3>VOTE</h3>
      </div>
      <div className='vote-wrap'>
        <div className='vote-desc'>
          <p className='vote-desc_t'>12월 20일(화) 오전 11시(KST)부터 골든디스크 인기상 투표가 시작됩니다.</p>
          <p className='vote-desc_b'>총 10일간 오로지 틱톡에서만 진행되는 단독 글로벌 공식 투표에 참여하고 골든디스크어워즈 보러 가자!
지금 바로 올해의 공식 골든디스크어워즈 인기상 투표에 참여하세요!</p>
        </div>
        <div className='vote-info'>
          <div className='vote-info_t'>
            <h6>Voting Info</h6>
          </div>
          <div className='vote-info-wrap'>
            <p>지금 바로 올해의 공식 골든디스크어워즈 인기상 투표에 참여하세요! 추첨을 통해 골든디스크어워즈 방콕 현장 티켓(1인 2매)과 행운의 10명(1인 2매)에게는 항공권, 숙박권, 현장 티켓 모두 풀 패키지로 드립니다.</p>
            <dl className='vote-info-list'>
              <dt className='vote-info-list_title'>투표 기간</dt>
              <dd className='vote-info-list_desc'>12월 20일 11:00 ~ 12월 29일 16:00(KST)</dd>
              <dt className='vote-info-list_title'>투표 방법</dt>
              <dd className='vote-info-list_desc'>
                <p><span className='num'>1.</span>틱톡(TikTok) 앱에서 '골든디스크' 혹은 'Goldendisc' 검색</p>
                <p><span className='num'>2.</span>계정당 1일 3표 투표 가능 (SNS로 공유하기 시 추가 2표 제공!)</p>
              </dd>
              <dt className='vote-info-list_title'>QR코드</dt>
              <dd className='vote-info-list_desc'>
                <Link href="https://activity.tiktok.com/magic/eco/runtime/release/638ffd5caf633b16979f4b70?appType=tiktok&magic_page_no=1">
                  <img src='/image/page/qrcode.png' />
                </Link>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
