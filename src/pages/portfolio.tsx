import type { NextPage } from 'next'
import Layout from '../components/layout'
import { useStore } from '../context/store'
import { ActionTypes } from '../context/actionType'
import { ModalProject } from '../components/modalProject'
import { WrapperComponent } from '../components/wrapperIcon'
import { Projects } from '../utils/projects'

const Portfolio: NextPage = () => {
  const { dispatch } = useStore()
  const handleShowProject = (P:any):void => {
    dispatch({type: ActionTypes.SHOWMODALPROJECT })
    dispatch({type: ActionTypes.SETMODALPROJECT, payload: P})
  }

  const truncateChars = (text: string): string => {
    return text.slice(0, 120) + '..'
  }
  return (
      <>
        <ModalProject />
        <Layout title="Portfolio">
          <section>
            <h1 className='my-5 text-sky-400 dark:text-sky-400 font-semibold text-xl '>#Portfolio</h1>
            <section className='mt-10 flex flex-wrap gap-3 items-center justify-center'>
              {Projects.map((P) => (
                <article 
                  key={P.id} 
                  className='w-[340px] h-[210px] lg:w-[383px] lg:h-[190px] border-[2px] border-gray-200 dark:border-sky-500 rounded-md p-4 flex flex-col justify-between'
                  onClick={()=> handleShowProject(P)} role={"button"} tabIndex={0}
                  >
                  <h1 className='font-bold mb-2 text-[20px]'>{P.title}</h1>
                  <p className='text-[16px] md:text-[16px] leading-6 dark:text-gray-300'>
                    {truncateChars(P.desc)}
                  </p>
                  <figcaption className='mt-4 flex items-center gap-3'>
                    {P.stack.map((path, i) => (
                      <WrapperComponent key={i} path={path} />
                    ))}
                  </figcaption>
                </article>
              ))} 
            </section>
          </section>
        </Layout>
      </>
     )
}

export default Portfolio

{/* <p>Sorry :( This page going under construction</p>
<p>
   Cannot waiting ? visit <a className='text-sky-400 underline' href="https://hendrialqori.vercel.app" target='_blank' rel="noreferrer">hendrialqori.vercel.app</a> instead!
</p> */}