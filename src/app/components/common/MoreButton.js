import '@/app/scss/components/button.scss'
import { FaArrowRight } from "react-icons/fa6";
export default function MoreButton({handleClick}) {
  return (
    <button onClick={handleClick}>
      <span>더보기</span> <FaArrowRight className='ico-arrow' />
    </button>
  )
}