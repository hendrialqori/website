import type { NextPage, GetStaticProps } from 'next'
import Layout from '../components/layout'
import { ArticleCard } from '../components/articleCard'
import type { ArticlesProps } from '../types'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const Home: NextPage<ArticlesProps> = ({ articles }) => {
  const Article = articles.slice(0, 2)
  return (
    <Layout title='Tricky | home'>
      <section className=''>
        <section className='mt-20' aria-label='up-side'>
          <section className='text-black dark:text-gray-200'>
            <h1 className='text-2xl font-extrabold'>Hi there, <br /> I&apos;m Hendri Alqori</h1>
            <h2 className='text-2xl font-extrabold'>Welcome to my personal website, <span className='text-sky-500'>Enjoy it!</span></h2>
          </section>
          </section>
          <section className='mt-10' aria-label='down-side'>
            <h3 className='text-xl font-semibold my-5 text-sky-400 dark:text-sky-400'>
              #recentPost
            </h3>
            <section className='flex flex-wrap gap-3'>
              {Article.map((article, i) => (
                <ArticleCard 
                  key={i} 
                  {...article} 
                  size={typeof window !== "undefined" 
                  && window.innerWidth <= 424 ? 'article' : 'card'}
                 />
              ))}
            </section>
          </section>
      </section>
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



