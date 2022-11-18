import Layout from '../components/layout'
import Image from 'next/image'
import Link from 'next/link'
import { SiGmail } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { AiFillGithub, AiOutlineWhatsApp} from 'react-icons/ai'
import { SiInstagram } from 'react-icons/si'
import { NextSeo } from 'next-seo'

import type { NextPage } from 'next'


const IndonesiaIcon = () => {
  return <Image src='/indonesia.svg' width={30} height={20} alt='indonesia-icon' />
}

const About:NextPage = () => {
  return (
    <Layout title='About'>
      <>
      <NextSeo 
            title='About -- Hendri Alqori'
            description='About myself, the skills I have and my career path'
            openGraph={{
              type: 'website',
              title: 'About -- Hendri Alqori',
              description: 'About myself, the skills I have and my career path',
              url: 'https://hendrialqori.vercel.app/about',
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
        <section className='dynamic-font md:leading-[1.75rem] mt-5 flex flex-col-reverse md:flex-row gap-2 text-gray-600 dark:text-gray-300'>
          <section className='w-full md:w-9/12'>
            <h1 className='text-3xl font-bold'>About me</h1>
            <p className='mb-5'>
              Hey everyone! My name is <b>Hendri Alqori</b> and i&apos;m from <a className='text-sky-600 dark:text-sky-400 underline' href="https://id.wikipedia.org/wiki/Kabupaten_Landak" target='_blank' rel="noreferrer">Landak, West Borneo</a><sup><IndonesiaIcon /></sup>
            </p>
            <blockquote>
            <em>&quot;You can never understand everything. But, you should push yourself to understand the system&quot;</em> <br /> <br />
              - Ryan Dahl (Creator of Node JS)
            </blockquote>
            <p>
              Previously, I am Coffee Barista and Assistant Manager at coffee shop in my area as long as 2 year,
              middle 2021 I decided to quit on my job and focus on web development field. 
              I start learning Web development in September 2018 when i got scholarship
              from <a href="https://ybmpln.org/" className='font-semibold text-sky-600 dark:text-sky-400 underline'>YBM PLN</a> and <a href="https://nurulfikri.com/" className='font-semibold text-sky-600 dark:text-sky-400 underline'>NF COMPUTER</a> as Junior Web Programmer.
            </p>
            <br />
            <p>
              I am quite proficient in several technologies to build an interactive web app, such as React JS, Next JS, Vue JS,
              Express JS and Postgre SQL as Relational Database.
              But now i&apos;m focusing on <b>Frontend Development</b> and open to to work on this field.
            </p>
          </section>
          <aside>
            <Image src='/H.png' alt='avatar' width={150} height={180} />
          </aside>
        </section>

        <section className='dynamic-font text-gray-600 dark:text-gray-300' aria-label='bottom-side'>
          <h1 className='text-xl font-bold'>Better Together</h1>
          <p>If you want to make friendship or cooperation, please contact me on my social media accounts below.</p>
          <section className='flex flex-wrap gap-2 mt-3' aria-label='contact-wrapper'>
            <Link href={'https://www.linkedin.com/in/hendri-alqori-b87a52171/'}>
              <a className='flex items-center justify-center gap-2 border-[1px] border-gray-400 rounded-lg px-1 py-2 w-5/12 md:w-3/12 '>
                  <FaLinkedin className='text-xl' />
                  <p className='font-semibold'>LinkedIn</p>
              </a>
            </Link>
            <Link href={'mailto:teamhendri18@gmail.com?subject='}>
              <a className='flex items-center justify-center gap-2 border-[1px] border-gray-400 rounded-md px-1 py-2 w-5/12 md:w-3/12 '>
                  <SiGmail className='text-xl' />
                  <p className='font-semibold'>Gmail</p>
              </a>
            </Link>
            <Link href={'https://github.com/hendrialqori'}>
              <a className='flex items-center justify-center gap-2 border-[1px] border-gray-400 rounded-md px-1 py-2 w-5/12 md:w-3/12 '>
                  <AiFillGithub className='text-2xl' />
                  <p className='font-semibold'>Github</p>
              </a>
            </Link>
            <Link href={'https://www.instagram.com/hendrialqori/'}>
              <a className='flex items-center justify-center gap-2 border-[1px] border-gray-400 rounded-md px-1 py-2 w-5/12 md:w-3/12 '>
                  <SiInstagram className='text-xl' />
                  <p className='font-semibold'>Instagram</p>
              </a>
            </Link>
            <Link href={'https://wa.me/+6289677546550'}>
              <a className='flex items-center justify-center gap-2 border-[1px] border-gray-400 rounded-md px-1 py-2 w-5/12 md:w-3/12 '>
                  <AiOutlineWhatsApp className='text-xl' />
                  <p className='font-semibold'>WhatsApp</p>
              </a>
            </Link>
          </section>
        </section>
      </>
    </Layout> 
  )
}

export default About