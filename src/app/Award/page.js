import '@/app/scss/page/award.scss'

export default function Award() {

  return (
    <div className="award section-gap">
      <div className='award-title'>
        <h3>시상 부문</h3>
      </div>
      <div className='award-table'>
        <table>
          <colgroup>
            <col width="50%" />
            <col width="50%" />
          </colgroup>
          <thead>
            <tr>
              <th scope='col'>디지털 음원 부문</th>
              <th scope='col'>음반 부문</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='first'>대상 (본상 중 1인/팀)</td>
              <td>대상 (본상 중 1인/팀</td>
            </tr>
            <tr>
              <td className='first'>본상</td>
              <td>본상</td>
            </tr>
            <tr>
              <td colspan="2">특별상</td>
            </tr>
            <tr>
              <td colspan="2">신인상</td>
            </tr>
            <tr>
              <td colspan="2">인기상</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='award-wrap'>
        <div className='award-info'>
          <div className='award-info_t'>
            <h6>심사기준 _</h6>
          </div>
          <div className='award-info-wrap'>
            <dl className='award-info-list'>
              <dd className='award-info-list_desc'>심사대상은 2021년 11월 초부터 2022년 11월 중순까지 발매된 음원 및 음반</dd>
              <dd className='award-info-list_desc'>전년도 집계 마감 기간에 겹쳐 후보에서 배제된 음원 및 음반은 심사 대상에 포함</dd>
              <dd className='award-info-list_desc'>수상자를 선정하는 판매량 집계 기간은 2022년 11월 30일까지</dd>
              <dd className='award-info-list_desc'>한 아티스트가 발표한 음원 또는 음반이 복수일 경우 각 부문 최고 판매고를 기록한 대표 음원 또는 대표 음반으로 후보 선정</dd>
              <dd className='award-info-list_desc'>음반 부문은 intro, outro, instrumental 트랙과 동일 앨범 수록곡 다른 버전을 제외한 신곡 6곡 이상을 수록한 음반 대상</dd>
              <dd className='award-info-list_desc'>단일 앨범(플랫폼 앨범 포함)은 주요곡 구성(트랙)이 동일하며 발매일자가 같고, 국내에서 생산돼 유통된 음반으로 제한하며
한국어가 아닌 다른 언어 버전일 경우에도 본 기준 부합시 단일 앨범으로 판단하여 전체 판매량에 합산.</dd>
              <dd className='award-info-list_desc'>리패키지 앨범은 별도의 단일 앨범으로 간주하여 다른 앨범과 동일한 기준을 적용하여 심사</dd>
              <dd className='award-info-list_desc'>특별상, 신인상 부문은 디지털 싱글, 6곡 이하의 신곡이 수록된 미니앨범 및 음반도 모두 포함</dd>
              <dd className='award-info-list_desc'>드라마·영화 O.S.T와 예능, 광고 등 프로젝트 일환으로 발매한 음원 및 음반은 본상 후보에서 제외</dd>
              <dd className='award-info-list_desc'>데이터 제공 : 써클차트</dd>
            </dl>
          </div>
        </div>
        <div className='award-info'>
          <div className='award-info_t'>
            <h6>수상자 선정방법 _</h6>
          </div>
          <div className='award-info-wrap'>
            <dl className='award-info-list'>
              <dt className='award-info-list_title'>대상 및 본상</dt>
              <dd className='award-info-list_desc'>판매량 집계 (60%) + 전문가 심사 (40%)</dd>
              <dd className='award-info-list_desc'>전문가 심사단은 업계 관계자, 가요담당 기자, 음악프로그램 PD, 대중음악평론가, 국내 주요 유통사 관계자, 골든디스크어워즈 집행위원 등 전문가로 구성</dd>
              <dd className='award-info-list_desc'>후보 선정 및 심사 기준의 공정성, 시상 부문의 적절성, 평가 기준의 적합성 등은 집행위원회에서 심의</dd>
            </dl>
            <dl className='award-info-list'>
              <dt className='award-info-list_title'>신인상</dt>
              <dd className='award-info-list_desc'>심사 대상 기간에 데뷔한 개인/팀을 대상으로 본상과 동일한 심사기준에 따라 선정</dd>
              <dd className='award-info-list_desc'>음원과 음반에 대한 신인상을 나누지 않음</dd>
              <dd className='award-info-list_desc'>음원 이용량과 음반 판매량을 각각 30%씩 반영해 정량평가 60%로 합산</dd>
            </dl>
            <dl className='award-info-list'>
              <dt className='award-info-list_title'>특별상</dt>
              <dd className='award-info-list_desc'>장르 트렌드를 선도하고 음악적 성과를 낸 개인/팀을 집행위원회 심사를 통해 선정</dd>
            </dl>
            <dl className='award-info-list'>
              <dt className='award-info-list_title'>인기상</dt>
              <dd className='award-info-list_desc'>인기투표 시스템에서 실시한 팬 투표 결과 100% 반영 선정</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
