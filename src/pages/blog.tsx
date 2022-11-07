import React, { useState, useMemo, useCallback, memo } from 'react'
import Layout from '../components/layout'
import { IoIosSearch } from 'react-icons/io'
import { ArticleCard } from '../components/articleCard'

import type { NextPage, GetStaticProps } from 'next'
import type { ArticlesProps, InputSearchProps } from '../types'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


const InputSearch = memo(function _({ handleChange }: InputSearchProps): JSX.Element {
  return (
    <section className='relative w-full lg:w-max mx-auto mt-7'>
      <IoIosSearch className='absolute right-4 top-2 text-gray-400 text-3xl' />
      <input
        type="text"
        name="value"
        onChange={handleChange}
        className="bg-white text-lg dark:bg-gray-200 w-full lg:w-[500px] rounded-full border-[1px] border-gray-200 outline-sky-400 py-2 px-3 placeholder:dark:text-gray-700"
        placeholder='Search article ..'
          />
    </section>
  )
})

const Blog: NextPage<ArticlesProps> = ({ articles }) => {
  const [search, setSearch] = useState({
    value: ""
  })

  const Articles = useMemo(()=> {
    return articles.filter(article => article.title.toLocaleLowerCase().includes(search.value))
  }, [articles, search.value])

  const handleChange = 
    useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
      setSearch(prev => {
        return {
          ...prev,
          [e.target.name]: e.target.value
        }
      })
    } ,[])

  return (
    <Layout title='Blog'>
      <section>
        <InputSearch handleChange={handleChange} />
        <h1 className='my-5 text-sky-400 dark:text-sky-400 font-semibold text-xl'>#allPost</h1>
        <section className='grid gap-3' aria-label='article-wrapper'>
          {Articles.length === 0 ? <span className='text-base text-black dark:text-white'>No article :(</span> : 
           Articles.map((article, i) => (
            <ArticleCard key={i} {...article} size='large' /> 
          ))} 
      </section>
      </section>
    </Layout>
  )
}

const getStaticProps:GetStaticProps = async () => {
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
 
export default Blog
export { getStaticProps }
