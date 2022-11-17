import Link from 'next/link'
import { AiTwotoneHeart } from 'react-icons/ai'
import { FaCoffee } from 'react-icons/fa'
import { GoPerson } from 'react-icons/go'

export const Footer:React.FC = () => {
  return (
    <footer>
      <section className='container mt-[100px] mb-[50px] py-5 flex flex-col items-center justify-center'>
        <h3 className='text-dark dark:text-light font-semibold text-sm'>Created by</h3>
        <div className='flex items-center gap-3 mt-2'>
        <GoPerson 
            className='text-[1.1rem] text-gray-400 hover:text-sky-300'
          />
          <AiTwotoneHeart
            className='text-[1.2rem] text-gray-400 hover:text-red-500'
          />
          <FaCoffee 
            className='text-[1.2rem] text-gray-400 hover:text-orange-500/50'
          />
        </div>
      </section>
    </footer>
  )
}