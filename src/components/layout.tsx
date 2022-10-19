import type { NextPage } from 'next'
import Head from 'next/head'
import { Navigate } from './navigate'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import { Footer } from '../components/footer'


interface LayoutProps {
    children: JSX.Element
    title: string
}

const Layout:NextPage<LayoutProps> = ({ children, title }) => {
  const [isShowBtnToTop, setShowBtnToTop] = useState<boolean>(false)
  const router = useRouter()

  useEffect(()=> {
    window.addEventListener('scroll', toTopEvent)

    return () => {
      window.removeEventListener('scroll', toTopEvent)
    }
  }, [])

  const toTopEvent= () => {
    const scrollY = window.scrollY
    if(scrollY >= 500) {
      setShowBtnToTop(true) 
      return
    }

    setShowBtnToTop(false)
  }

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='dark:bg-dark'>
        {/* <ModalSeach /> */}
        <Head>
            <title>{ title }</title>
            <link rel="icon" href="/logo.svg" />
            <meta name="description" content="Tricky is a blog that provides articles about web development specifically in the frontend realm" />
            <meta property="og:title" content="tricky blogs" />
            <meta property="og:url" content="https://blog-tricky.vercel.app/" />
            <meta property="og:description" content="Tricky is a blog that provides articles about web development specifically in the frontend realm" />
            <meta property="og:image" content="/logo.svg" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=yes" />
            <meta name="Description" content="Tricky is a blog that provides articles about web development specifically in the frontend realm"/>
            <meta name="robots" content="all" />
            <meta name="ROBOTS" content="index,follow" />
        </Head>

        <Navigate />
        <AnimatePresence>
          <motion.div
            aria-label='page-motion-animate-wrapper'
            key={router.route}
            initial={{ x: -30, opacity: 0}}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.50 }}
          >
            <main className='container pt-24'>
              { children }
            </main>
          </motion.div>
        </AnimatePresence>
        <Footer />

        {/* <button 
        onClick={()=> toTop()}
        style={{ visibility: isShowBtnToTop ? 'visible' : 'hidden' }} 
        className={style['btn__top']}
        >
          <HiOutlineArrowNarrowUp />
        </button> */}
    </div>
  )
}

export default Layout