import Link from 'next/link'
import { AiTwotoneHeart } from 'react-icons/ai'
import { CgCoffee } from 'react-icons/cg'

export const Footer:React.FC = () => {
  return (
    <footer>
      <section className='container mt-[150px] py-5 border-t-[1px] dark:border-gray-700 flex justify-between'>
        <p className='dark:text-white text-[16px] flex items-center gap-1 font-light'>
          Build with <AiTwotoneHeart className='text-rose-600' /> & <CgCoffee className='text-orange-500' />
        </p>
      </section>
    </footer>
  )
}