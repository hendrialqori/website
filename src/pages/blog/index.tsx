import React, { useState, useMemo, useCallback, memo } from 'react'
import Layout from '../../components/layout'
import { IoIosSearch } from 'react-icons/io'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

import type { NextPage, GetStaticProps } from 'next'
import type { ArticlesProps, InputSearchProps } from '../../types'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


const InputSearch = memo(function _({ value, handleChange }: InputSearchProps): JSX.Element {
  return (
    <section className='relative w-full mt-7'>
      <IoIosSearch className='absolute right-4 top-2 text-gray-400 text-3xl' />
      <input
        type="text"
        name="value"
        value={value}
        onChange={handleChange}
        className="bg-white dark:bg-light/10 rounded-md w-full border-gray-200 p-3"
        placeholder='Search article ..'
          />
    </section>
  )
})

const Blog: NextPage<ArticlesProps> = ({ articles }) => {
  const [search, setSearch] = useState('')

  const Articles = useMemo(()=> {
    return articles.filter(article => article.title?.toLocaleLowerCase()?.includes(search))
      .sort((a, b) => b.id - a.id)
  }, [articles, search])

  const handleChange = 
    useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
    } ,[])

  return (
    <Layout title='Blog'>
      <>
        <NextSeo 
            title='Blog -- Hendri Alqori'
            description='I write blog, Share a bit of my knowladge about web developement relative topics'
            openGraph={{
              type: 'website',
              title: 'Blog -- Hendri Alqori',
              description: 'I write blog, Share a bit of my knowladge about web developement relative topics',
              url: 'https://hendrialqori.vercel.app/blog',
              siteName: 'Hendri Alqori',
              images : [ 
                {
                  url: 'https://ik.imagekit.io/ils26chuk/og-image.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668654017675',
                  width: 1200,
                  height: 630,
                },
              ]
            }}
          />
        <header className='mt-5'>
          <h1 className='text-3xl font-bold'>Blog</h1>
          <p className='text-black dark:text-light/70'>I write blog, Share a bit of my knowledge about web development relative topics, Enjoy it fellas!</p>
        </header>
        <InputSearch value={search} handleChange={handleChange} />
        <section className='grid gap-10 mt-12' aria-label='article-wrapper'>
          {Articles.length === 0 ? <span className='text-base text-black dark:text-white'>No article :(</span> : 
           Articles.map((article, i) => (
            <Link key={i} href={'/blog/' + article.slug }>
                <article 
                  aria-label='card-wrapper'
                  role={'button'}
                  tabIndex={0}
                  >
                    <div className='flex items-center text-xs gap-4 mb-1'>
                      <p>{article.created}</p>
                      <p>{article.tag}</p>
                    </div>
                    <h2 className='font-extrabold text-xl hover:underline'>{article.title}</h2>
                    <p className='text-black dark:text-light/70 font-light text-sm md:text-base mt-1'>{article.highlight}</p>
                </article>
              </Link>
          ))} 
      </section>
      </>
    </Layout>
  )
}

const getStaticProps:GetStaticProps = async () => {
    const files = fs.readdirSync(path.join('src', 'articles'))
    const articles = files.map((file: string) => {
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
 
export default Blog
export { getStaticProps }
