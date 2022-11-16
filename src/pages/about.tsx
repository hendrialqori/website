import Layout from '../components/layout'
import Image from 'next/image'
import Link from 'next/link'
import { SiGmail } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { SiInstagram } from 'react-icons/si'

import type { NextPage } from 'next'


const IndonesiaIcon = () => {
  return <Image src='/indonesia.svg' width={30} height={20} alt='indonesia-icon' />
}

const About:NextPage = () => {
  return (
    <Layout title='About'>
      <>
        <section className='dynamic-font md:leading-[1.75rem]' aria-label='top-side'>
          <h1 className='text-3xl font-bold'>About</h1>
          <p className='mb-5'>
            Hey everyone! My name is <span className='font-semibold'>Hendri Alqori</span> and i am from <a className='text-sky-600 dark:text-sky-400 underline' href="https://id.wikipedia.org/wiki/Kabupaten_Landak" target='_blank' rel="noreferrer">Landak, West Borneo</a><sup><IndonesiaIcon /></sup>
          </p>
          <p>
            Previously, Iam a Coffee Barista and an Assistant Maneger at coffee shop in my area as long as 2 year,
            middle 2021 I decided to quit on my job and focus on web development field.
            I feel was enough for me as long as 2 year working at F&B and Management field, i found a lot knowladge and relational with other peole.
            Character development, People manegement, Problem solving and etc i gotten on there.
            This skill i&rsquo;ll combined with my programming knowladge to start new career as Frontend Developer.
            </p>
          <p >
            I love learning something new about programming topic, Whatever!. <br />
            <span className='bg-yellow-300 px-1 rounded-sm dark:text-black'>Javascript</span>, <span className='bg-sky-600 px-1 text-white rounded-sm'>Typescript</span>, <span className='bg-sky-400 px-1 rounded-sm text-white'>React</span> and <span className='bg-black text-white px-1 rounded-md border-[1px]'>next</span> , i love all those.
            <br />
            And now i <span className='bg-green-300 px-1 font-semibold rounded-sm'>open to work as Frontend developer</span> with above skill.
          </p>
        </section>

        <section className='dynamic-font' aria-label='bottom-side'>
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
          </section>
        </section>
      </>
    </Layout> 
  )
}

export default About