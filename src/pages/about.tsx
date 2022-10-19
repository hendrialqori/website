import Layout from '../components/layout'
import Image from 'next/image'
import { Contacts } from '../utils/contact'
import type { NextPage } from 'next'


const IndonesiaIcon = () => {
  return <Image src='/indonesia.svg' width={30} height={20} alt='indonesia-icon' />
}

const About:NextPage = () => {
  return (
    <Layout title='about'>
      <section>
        <section className='mb-10' aria-label='top-side'>
          <h1 className='my-5 text-sky-400 dark:text-sky-400 font-semibold text-xl'>#aboutMe</h1>
          <h2 className='text-lg font-normal dark:text-gray-100'>
                Hey everyone! My name is <span className='font-semibold'>Hendri Alqori</span> and i am from <a className='text-sky-600 underline' href="https://id.wikipedia.org/wiki/Kabupaten_Landak" target='_blank' rel="noreferrer">Landak, West Borneo</a><sup><IndonesiaIcon /></sup>
          </h2>
          <p className='text-[17px] my-5 text-gray-600 dark:text-gray-100'>
            Previously, Iam a Coffee Barista and an Assistant Maneger at coffee shop in my area as long as 2 year,
            and middle 2021 I decided to quit on my job and focus on web development field.
            I feel was enough for me as long as 2 year working at F&B and Management field, i found a lot knowladge and relational with other peole.
            Character development, People manegement, Problem solving and etc i gotten on there.
            This skill i&rsquo;ll combined with my programming knowladge to switch career to web development.
            </p>
          <p className='text-[17px] text-gray-600 dark:text-gray-100'>
            I love learning something new about programming topic, Whatever!. <br />
          <span className='bg-yellow-300 px-1 rounded-md'>Javascript</span>, <span className='bg-sky-600 px-1 text-white rounded-md'>typescript</span>, <span className='bg-sky-400 px-1 rounded-md text-white'>react</span> and <span className='bg-black text-white px-1 rounded-md'>next</span>, i love all those. <br />
            And now i <span className='bg-green-300 px-1 font-semibold rounded-md text-black'>open to work as Frontend developer</span> with above skill.
          </p>
        </section>
        <section aria-label='bottom-side'>
          <h1 className='my-5 text-sky-400 font-semibold text-xl'>#betterTogether</h1>
          <p className='text-[17px] text-gray-600 dark:text-gray-100'>If you want to make friendship or cooperation, please contact me on my social media accounts below.</p>
          <section className='flex gap-5 mt-3' aria-label='contact-wrapper'>
            <div className='grid gap-1'>
              {Contacts.slice(0, 3).map((contact, i) => (
                <a className='text-[16px] font-semibold hover:text-sky-600 hover:underline dark:text-gray-300' href={contact.link} target='_blank' key={i} rel="noreferrer">
                  &#8901; {contact.title}
                </a>
              ))}
            </div>
            <div className='flex flex-col gap-1'>
              {Contacts.slice(4, Contacts.length).map((contact, i) => (
                <a className='text-[16px] font-semibold hover:text-sky-600 hover:underline dark:text-gray-300' href={contact.link} target='_blank' key={i} rel="noreferrer">
                  &#8901; {contact.title}
                </a>
              ))}
            </div>
          </section>
        </section>
      </section>
    </Layout> 
  )
}

export default About