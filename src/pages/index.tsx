import { Fragment, useCallback, useEffect, useState } from 'react'
import type { NextPage, GetStaticProps } from 'next'
import Layout from '../components/layout'
import type { ArticlesProps } from '../types'
import Link from 'next/link'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const Home: NextPage<ArticlesProps> = ({ articles }) => {
  const Article = articles.slice(0, 2)
  const [size, setSize] = useState<'medium' | 'large'>('medium')

  const onResizeScreen = useCallback(() => {
    typeof window !== 'undefined'
    && window.innerWidth <= 768 ?
    setSize('large') : setSize('medium')
  }, [])

  useEffect(()=> {
    window.addEventListener('resize', onResizeScreen)

    return () => {
      window.removeEventListener('resize', onResizeScreen)
    }
  }, [onResizeScreen])


  return (
    <Layout title='Home'>
      <Fragment>
        <header className='mt-10 lg:mt-20' aria-label='up-side'>
          {/* <Image src='/vector.png' className='rounded-full object-cover' width={80} height={80} alt='avatar' /> */}
          <section className='text-black dark:text-gray-200'>
            <h1 className='text-2xl font-bold'>Hi there, <br /> I&apos;m Hendri Alqori</h1>
            <h2 className='text-2xl font-bold'>Welcome to my personal site, <span className='text-sky-500'>folks!</span></h2>
          </section>
        </header>
        <section className='mt-10' aria-label='down-side'>
          <h3 className='text-xl font-semibold my-5 text-sky-400 dark:text-sky-400'>
            #recentPost
          </h3>
          <section className='flex flex-wrap gap-3'>
            {Article.map((article, i) => (
              <Link key={article.slug} href={'/' + article.slug }>
                <article
                  className='flex gap-5 w-[100%] md:w-[48%] bg-light dark:bg-dark border-[1px] dark:border-slate-800 rounded-2xl p-6 cursor-pointer' aria-label='card-wrapper'>
                  <section className='w-full' aria-label='right-side'>
                    <div className='flex gap-5 items-center mb-2'>
                      <p className='text-gray-700 dark:text-gray-400 text-xs md:text-sm'>{article.created}</p>
                      <p className='text-sky-600 text-xs md:text-sm'>{article.tag}</p>
                    </div>
                    <div>
                      <h2 className='text-[1rem] lg:text-[1.1rem] font-semibold leading-6 mt-2 text-sky-600 dark:text-sky-400'>{article.title}</h2>
                      <p className='text-[14px] lg:text-[1rem] leading-5 mt-2 text-gray-700 dark:text-gray-300'>{article.highlight}</p>
                    </div>
                  </section>
                </article>
              </Link>
            ))}
          </section>
        </section>
      </Fragment>
    </Layout>
  )
}
export default Home


export const getStaticProps:GetStaticProps = async () => {
  const files = fs.readdirSync(path.join('src', 'articles'))
  const articles = files.map((file: string) => {
    // const slug = file.replace('.mdx', '')
    const dataWithMatter = fs.readFileSync(path.join('src', 'articles', file), 'utf-8')
    const { data } = matter(dataWithMatter)
    return data     
  })

  return {
    props: {
      articles 
    }
  }
}



