import Link from 'next/link'
import Image from 'next/image'
import type { ArticleCardProps } from '../types'

export const ArticleCard = 
  ({ size, title, highlight, created, tag, timeRead ,slug }:ArticleCardProps): JSX.Element => {
  
  let boxSizing: string;
  switch(size) {
    case 'large':
      boxSizing = '100%'
      break;
    case 'medium':
      boxSizing = '48%'
      break;
    case 'small':
      boxSizing = '100%'
      break;
    default:
      boxSizing = '50%'
  }
  
  
  return (
   <Link href={'/' + slug }>
      <article 
      style={{ width: `${boxSizing}` }} 
      className='flex gap-5 bg-light dark:bg-dark border-[1px] dark:border-slate-800 rounded-2xl p-6 cursor-pointer' aria-label='card-wrapper'>
        <section className='w-full' aria-label='right-side'>
          <div className='flex gap-5 items-center mb-4'>
            <p className='text-gray-700 dark:text-gray-400 text-xs md:text-sm'>{created}</p>
            <p className='text-sky-600 text-xs md:text-sm'>{tag}</p>
          </div>
          <div>
            <h2 className='text-[1rem] lg:text-[1.2rem] font-semibold leading-6 mt-2 text-sky-600 dark:text-sky-400'>{title}</h2>
            <p className='text-[14px] lg:text-[1rem] leading-6 mt-2 text-gray-700 dark:text-gray-400'>{highlight}</p>
          </div>
        </section>
      </article>
   </Link>
  )
}