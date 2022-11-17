import type { NextPage } from 'next'
import Layout from '../components/layout'
import { useStore } from '../context/store'
import { ActionTypes } from '../context/actionType'
import { ModalProject } from '../components/modal-project'
import { Icon } from '../components/icon-wrapper'
import { Projects } from '../utils/projects'
import { NextSeo } from 'next-seo'

const Portfolio: NextPage = () => {
  const { dispatch } = useStore()
  const handleShowProject = (P:any):void => {
    dispatch({type: ActionTypes.SHOWMODALPROJECT })
    dispatch({type: ActionTypes.SETMODALPROJECT, payload: P})
  }

  const truncateChars = (text: string): string => {
    return text.slice(0, 90) + '..'
  }
  return (
      <Layout title="Portfolio">
        <>
          <ModalProject />
          <NextSeo 
            title='Portfolio -- Hendri Alqori'
            description='Personal portfolio, Some App created with technology who i mastered'
            openGraph={{
              type: 'website',
              title: 'Portfolio -- Hendri Alqori',
              description: 'Personal portfolio, Some App created with technology who i mastered',
              url: 'https://hendrialqori.vercel.app/portfolio',
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
          <header className='mt-5'>
            <h1 className='text-3xl font-bold'>Portfolio</h1>
            <p className='text-black dark:text-light/70'>Personal portfolio, Some App created with technology who i mastered.</p>
          </header>
          <section className='mt-10 flex flex-wrap gap-10 items-center justify-center'>
            {Projects.map((P) => (
              <figure 
                key={P.id} 
                >
                <header className='flex items-center gap-3'>
                  <h1 className='font-extrabold mb-1 text-xl'>{P.title}</h1>
                  <button onClick={()=> handleShowProject(P)} className='border-[1px] rounded-md text-xs px-3 py-1'>
                    Review
                  </button>
                </header>
                <p className='text-black dark:text-light/70 font-light text-sm md:text-base'>
                  {truncateChars(P.desc)}
                </p>
                <figcaption className='mt-4 flex items-center gap-3'>
                  {P.stack.map((path, i) => (
                    <Icon key={i} path={path} />
                  ))}
                </figcaption>
              </figure>
            ))} 
          </section>
        </>
      </Layout>
     )
}

export default Portfolio

{/* <p>Sorry :( This page going under construction</p>
<p>
   Cannot waiting ? visit <a className='text-sky-400 underline' href="https://hendrialqori.vercel.app" target='_blank' rel="noreferrer">hendrialqori.vercel.app</a> instead!
</p> */}