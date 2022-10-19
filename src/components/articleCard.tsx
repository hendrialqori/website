import Link from 'next/link'
import Image from 'next/image'
import type { ArticleCardProps } from '../types'

export const ArticleCard = 
  ({ size, title, highlight, created, tag, timeRead ,slug }:ArticleCardProps): JSX.Element => {
  return (
   <Link href={'/' + slug }>
      <article style={{ width: size === 'card' ? '410px' : '100%' }} className='flex gap-5 bg-white dark:bg-black shadow-lg rounded-[2rem] p-6 cursor-pointer' aria-label='card-wrapper'>
        <section aria-label='left-side'>
          <Image src="/avatar.png" width={30} height={30} alt="author-avatar" />
        </section>
        <section className='w-full' aria-label='right-side'>
          <div className='flex justify-between items-center text-[.75rem]'>
            <h1 className='text-sm font-semibold dark:text-white'>Hendri Alqori</h1>
            <p className='text-gray-500 dark:text-gray-400 text-xs'>{created}</p>
          </div>
          <div>
            <h2 className='text-[1.1rem] font-semibold leading-5 mt-2 text-sky-600 dark:text-sky-400'>{title}</h2>
            <p className='text-[1rem] leading-5 mt-2 dark:text-white'>memo commonly used for performance optimization for own react app, But had other way instead using memo.</p>
          </div>
          <div className='flex items-center justify-between mt-2'>
            <p className='text-sky-600 text-sm'>{tag}</p>
            <p className='text-gray-500 dark:text-gray-400 text-sm'>{timeRead}</p>
          </div>
        </section>
      </article>
   </Link>
  )
}