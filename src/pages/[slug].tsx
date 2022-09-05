import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import Layout from '../component/layout'
import style from '../styles/Slug.module.css'
import Image from "next/image";
import { AiOutlineCopy } from 'react-icons/ai'

import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/atom-one-dark.css';
import { useState } from "react";


interface article {
    title: string;
    tag : string[];
    image: string;
    created: string;
    read: string,
    slug: string;
  }

interface Props {
    data: article;
    content: any
}

const Slug: NextPage<Props> = ({ data, content }) => {
  const [isCopied, setCopied] = useState<boolean>(false)

  const copyTextToClipboard = async (url: string) => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(url);
    } else {
      return document.execCommand('copy', true, url);
    }
  }

  const copyClip = () => {
    copyTextToClipboard(window.location.href)
      .then((_) => {
        setCopied(true)

        setTimeout(()=> {
            setCopied(false)
        }, 1500)
      })
      .catch(e => {
        throw new Error(e.message)
      })
  }

  return (
    <Layout title={"Tricky - " + data.slug}>
        <section className={style['container']}>
            <article className={style['__article']}>
                <header className={style['__head']}>
                    <h1 className={style['__title']}>{data.title}</h1>
                    <div className={style['__information']}>
                        <div className={style['__author']}>
                            <Image src={'/HA.jpg'} alt='author-avatar' width={35} height={35} />
                            <p>Hendri Alqori / {data?.created}</p>
                        </div>
                        <div className={style['__read']}>
                            <p>{data.read}</p>
                        </div>
                    </div>
                </header>
                <section className={style['mdx__context']}>
                    <button onClick={() => copyClip()} className={style['btn__copy']}>
                        <AiOutlineCopy />
                        <p>{ isCopied ? 'copied!' : 'Copy and share' }</p>
                    </button>
                    {/* MDX render to html */}
                    <MDXRemote {...content}/>
                </section>
            </article>
        </section>
    </Layout>
  )
}

export default Slug;


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
                rehypeHighlight
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