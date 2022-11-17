import type { NextPage } from 'next'
import Head from 'next/head'
import { Navigate } from './header'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import { Footer } from '../components/footer'
import { HiOutlineArrowNarrowUp } from 'react-icons/hi'
import { NextSeo } from 'next-seo'

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
        <Navigate />
        <AnimatePresence>
          <motion.div
            aria-label='page-motion-animate-wrapper'
            key={router.route}
            initial={{ x: -30, opacity: 0}}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.20 }}
          >
            <main className='container pt-24 font-inter dark:text-light'>
              { children }
            </main>
          </motion.div>
        </AnimatePresence>
        <Footer />

        {/* <button 
        onClick={()=> toTop()}
        style={{ visibility: isShowBtnToTop ? 'visible' : 'hidden' }} 
        >
          <HiOutlineArrowNarrowUp />
        </button> */}
    </div>
  )
}

export default Layout