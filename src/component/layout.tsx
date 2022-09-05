import type { NextPage } from 'next'
import Head from 'next/head'
import { Navigate } from './navigate'
import { ModalSeach } from './search'
import { Footer } from './foot'
import { HiOutlineArrowNarrowUp } from 'react-icons/hi'
import style from '../styles/Layout.module.css'
import { useLayoutEffect, useState } from 'react'


interface LayoutProps {
    children: JSX.Element
    title: string
}

const Layout:NextPage<LayoutProps> = ({ children, title }) => {

  const [isShowBtnToTop, setShowBtnToTop] = useState<boolean>(false)

  useLayoutEffect(()=> {
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
    <div className={style['main-wrapper']}>
        <ModalSeach />
        <Head>
            <title>{ title }</title>
            <link rel="icon" href="/logo.svg" />
            <meta name="description" content="Tricky is a blog that provides articles about web development specifically in the frontend realm" />
            <meta property="og:title" content="tricky blogs" />
            <meta property="og:url" content="https://tricky.vercel.app/" />
            <meta property="og:description" content="Tricky is a blog that provides articles about web development specifically in the frontend realm" />
            <meta property="og:image" content="/logo.svg" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=yes" />
            <meta name="Description" content="Tricky is a blog that provides articles about web development specifically in the frontend realm"/>
            <meta name="robots" content="all" />
            <meta name="ROBOTS" content="index,follow" />
        </Head>

        <Navigate />
          <main className={style['main-container']}>
              { children }
          </main>
        <Footer />

        <button 
        onClick={()=> toTop()}
        style={{ visibility: isShowBtnToTop ? 'visible' : 'hidden' }} 
        className={style['btn__top']}
        >
          <HiOutlineArrowNarrowUp />
        </button>
    </div>
  )
}

export default Layout