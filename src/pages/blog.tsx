import type { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'
import React, { useState, useMemo } from 'react'
import Layout from '../component/layout'
import style from '../styles/Blog.module.css'
import { BiSearchAlt } from 'react-icons/bi'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface article {
    title: string;
    highlight: string;
    created: string;
    slug: string
}

interface Props {
    articles: article[]
}

const Blog: NextPage<Props> = ({ articles }) => {
  
  const [search, setSearch] = useState<string>('')

  const Articles = useMemo(()=> {
    return articles.filter(article => article.title.toLocaleLowerCase().includes(search))
  }, [articles, search])

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleSearch = (e:React.FormEvent) => {
    e.preventDefault()
  }
  return (
    <Layout title='tricky - Blog'>
        <section className={style['container']}>
            <h1 className={style['__title']}>Semua artikel</h1>
            <form onSubmit={handleSearch} className={style['__form']}>
              <input 
                className={style['search__input']}
                value={search}
                onChange={handleChange}
                type='text'
                />
                <BiSearchAlt />
            </form>
            <div className={style['article__wrapper']}>
                {
                  Articles.length < 1 ? <p className={style['__zero']}> Sorry, postingan belum tersedia : (</p> :
                  Articles.map((data, i) => (
                    <Link key={i} href={'/'+ data.slug}>
                        <figure className={style['__article']}>
                            <header>
                                <h1>{data.title}</h1>
                                <p>{data.created}</p>
                            </header>
                            <figcaption>
                               {data?.highlight}
                            </figcaption>
                        </figure>
                    </Link>
                  ))
                }
            </div>
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
