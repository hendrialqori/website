import Layout from '../components/layout'
import Image from "next/image";
import { BsCalendarDate, BsClock } from 'react-icons/bs';

import type { SlugProps } from '../types';
import type { NextPage, GetStaticProps, GetStaticPaths } from "next";

import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import rehypePrism from 'rehype-prism-plus';
import rehypeCodeTitles from 'rehype-code-titles';

const Slug: NextPage<SlugProps> = ({ data, content }) => {
  return (
    <Layout title={data.title}>
      <article>
        <header className="my-6">
          <section className="flex gap-3 items-center" aria-label='left-side'>
            <Image src="/avatar.png" width={50} height={50} alt="author-avatar" />
            <section>
              <h1 className="font-semibold text-sm mb-1">Hendri Alqori</h1>
              <section className="flex items-center gap-4">
                <span className="text-gray-500 flex items-center gap-2">
                  <BsCalendarDate className='text-lg' />
                  <p className="text-xs md:text-sm">{data.created}</p>
                </span>
                <span className="text-gray-500 flex items-center gap-2">
                  <BsClock className="text-xs md:text-sm" />
                  <p className="text-sm">{data.timeRead}</p>
                </span>
              </section>
            </section>
          </section>
          <p className='text-sky-600 dark:text-sky-400 text-lg font-semibold mb-2 mt-10'>{data.tag}</p>
          <h1 className="text-[1.8rem] lg:text-[3rem] font-bold leading-[2.2rem] lg:leading-[3.6rem] dark:text-white">{data.title}</h1>
        </header>
        <MDXRemote {...content}/>
      </article>
    </Layout>
  )
}

export default Slug

export const getStaticPaths:GetStaticPaths = async() => {
    const files = fs.readdirSync(path.join('src', 'articles'))
    const paths = files.map((filename: string) => ({
        params : {
            slug: filename.replace('.md', '')
        }
    }))

   return {
    paths,
    fallback : false
   }
}

export const getStaticProps:GetStaticProps = async ({ params: { slug } }) => {
    const article = fs.readFileSync(path.join('src', 'articles', (slug as string) + '.md'))
    const { data, content: markdownData } = matter(article)
    const content = await serialize(markdownData, {
        mdxOptions: {
            rehypePlugins : [
                rehypeCodeTitles,
                rehypePrism
            ]
        }
    })

    return {
        props: {
            data,
            content
        }
    }
}