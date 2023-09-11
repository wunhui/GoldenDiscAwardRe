import '@/app/scss/page/main/mainSupporter.scss'
import Marquee from "react-fast-marquee";
export default function suppoter() {
  const supporters = [
    {
      id: 0,
      img: '/image/page/supporter/ticker-0.png',
      alt: 'jtbc'
    },
    {
      id: 1,
      img: '/image/page/supporter/ticker-1.png',
      alt: 'jtbc2'
    },
    {
      id: 2,
      img: '/image/page/supporter/ticker-2.png',
      alt: 'jtbc4'
    },
    {
      id: 3,
      img: '/image/page/supporter/ticker-3.png',
      alt: 'paravi'
    },
    {
      id: 5,
      img: '/image/page/supporter/ticker-4.png',
      alt: 'tiktok'
    },
    {
      id: 6,
      img: '/image/page/supporter/ticker-5.png',
      alt: 'tbs'
    },
    {
      id: 7,
      img: '/image/page/supporter/ticker-6.png',
      alt: 'hyundai'
    },
  ]
  return (
    <div className="suppoter">
      <Marquee className='suppoter-wrap' speed={50}>
        {
          supporters.map(item => {
            return (
              <li className='suppoter-list' key={item.id}>
                <img src={item.img} alt={item.alt} />
              </li>
            )
            })
        }
      </Marquee>
    </div>
  )
}
