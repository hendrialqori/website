import Layout from '../components/layout'
import Image from "next/image";

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
    <Layout title={"Tricky - " + data.slug}>
      <article>
        <header className="my-6">
          <section className="flex gap-3 items-center" aria-label='left-side'>
            <Image src="/avatar.png" width={50} height={50} alt="author-avatar" />
            <section>
              <p className="font-semibold text-sm">Hendri Alqori</p>
              <p className="text-sm text-gray-500">{data.timeRead} | {data.created}</p>
            </section>
          </section>
          <p className='text-sky-600 dark:text-sky-400 text-lg font-semibold mb-2 mt-10'>{data.tag}</p>
          <h1 className="text-[2.7rem] lg:text-[3.5rem] font-bold leading-[3rem] lg:leading-[3.6rem] dark:text-white">{data.title}</h1>
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