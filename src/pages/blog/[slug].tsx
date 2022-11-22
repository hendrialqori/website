import Layout from '../../components/layout'
import Image from "next/image";
import Link from 'next/link'
import { FaLinkedin } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { ArticleJsonLd, NextSeo } from 'next-seo';

import type { SlugProps } from '../../types';
import type { NextPage, GetStaticProps, GetStaticPaths } from "next";

import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import rehypePrism from 'rehype-prism-plus';
import rehypeCodeTitles from 'rehype-code-titles';

import { 
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon
} from 'next-share'

const Slug: NextPage<SlugProps> = ({ data, content }) => {
  return (
    <Layout title={data.title}>
      <>
        <NextSeo 
            title={data.title}
            description={data.highlight}
            openGraph={{
            type: 'website',
            title: data.title,
            description: data.highlight,
            url: `https://hendrialqori.vercel.app/${data.slug}`,
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
          <ArticleJsonLd
            title={data.title}
            url={`https://hendrialqori.vercel.app/${data.slug}`}
            images={[
              'https://ik.imagekit.io/ils26chuk/og-image.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1668654017675',
            ]}
            datePublished={data.created}
            authorName={[
              {
                name: 'Hendri Alqori',
                url: 'https://hendrialqori.vercel.app',
              }
            ]}
            publisherName="Hendri Alqori"
            description={data.title}
            isAccessibleForFree={true}
          />
        <article className='mt-1 md:mt-10'>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-center">{data.title}</h1>
          <header className='w-max mx-auto flex flex-col items-center gap-1 my-8' aria-label='author'>
            <Image src="/avatar.png" width={40} height={40} alt="author-avatar" />
            <h2 className="font-semibold dark:font-light text-sm">Hendri Alqori</h2>
            <div className='flex items-center gap-3 text-xs'>
              <p>{data.created}</p>
              <p>{data.timeRead}</p>
            </div>
            <section className='flex items-center gap-1 mt-7'>
              {/* <h2 className='dynamic-font'>Share</h2> */}
              <FacebookShareButton
                url={`https://hendrialqori.vercel.app/blog/${data.slug}`}
                quote={'next-share is a social share buttons for your next React apps.'}
                hashtag={'#nextshare'}
                >
                <FacebookIcon size={25} round />
              </FacebookShareButton>
              <LinkedinShareButton 
                  url={`https://hendrialqori.vercel.app/blog/${data.slug}`}>
                <LinkedinIcon size={25} round />
              </LinkedinShareButton>
              <WhatsappShareButton 
                  url={`https://hendrialqori.vercel.app/blog/${data.slug}`}>
                <WhatsappIcon size={25} round />
              </WhatsappShareButton>
            </section>
          </header>
          <section className='mdx-wrapper dynamic-font'>
            <MDXRemote {...content}/>
          </section>
        </article>
      </>
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