import type { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'
import Layout from '../component/layout'
import style from '../styles/Home.module.css'
import { Card } from '../component/card'
import { BsArrowRight } from 'react-icons/bs'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface Props {
  articles : article[]
}

interface article {
    title: string;
    tags: string[];
    created: string;
    read: string,
    image?: string,
    slug: string 
}

const Home: NextPage<Props> = ({ articles }) => {
  return (
    <Layout title='Tricky &#8226; home'>
      <section className={style['container']} aria-label='home-container'> 
          <header className={style['head__title']}>
            <h1><span>tricky</span> | Hendri Alqori blog&lsquo;s</h1>
            <p>IT Enthusianst & Frontend web developer</p>
            <p>Membuat artikel tentang Web Development dan <br /> berbagi tips tentang itu</p>
          </header>
          <section className={style['articles__wrapper']}>
            <h2>Postingan terbaru</h2>
            <div className={style['articles__list__wrapper']}>
              {
                articles.map((obj, i) => (
                  <Card
                    key={i}
                    title={obj.title}
                    created={obj.created}
                    tags={obj.tags}
                    slug={obj.slug}
                  />
                ))
              }
            </div>
            <Link href={'/blog'}>
              <span className={style['link_all_post']}>
                <BsArrowRight /> 
                <p>semua post</p>
              </span>
            </Link>
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



