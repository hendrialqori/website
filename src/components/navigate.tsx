import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { memo, useCallback, useEffect, useState } from 'react'
import { CustomLink } from './activeClassRoute'
import { Navigate as NavigateList } from '../utils/navigate'
import { AnimatePresence, motion } from 'framer-motion'

const SunIcon = memo(function _(){
  return <Image src='/sun.svg' width={20} height={20} alt='moon-icon'/>
})

const MoonIcon = memo(function _(){
  return <Image src='/moon.svg' width={16} height={16} alt='moon-icon'/>
})

export const Navigate:React.FC = () => {
  const router = useRouter()

  const [activeTitle, setActiveTitle] = useState(
    router.pathname === '/' ? 'Home' : router.pathname.slice(1, router.pathname.length)
  )
  const [isDark, setDark] = useState<boolean>(
    typeof window !== 'undefined' && localStorage?.theme === 'dark'
    ? true : false
  )
  const [mobileMode, setMobileMode] = useState<boolean>()
  const [isVisibleMobileNav, setVisibleMobileNav] = useState(false)



  const handleResize = ()=> {
    return typeof window !== 'undefined'
          && window.innerWidth < 768 ?
          setMobileMode(true) : setMobileMode(false)
  }

  const windowResizeFunc = useCallback(handleResize, [])

  useEffect(()=> {
    if (isDark){
      document.documentElement.setAttribute('data-mode', "dark")
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-mode', "")
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  useEffect(()=> {
    handleResize()
    window.addEventListener('resize', windowResizeFunc)

    return () => {
      window.removeEventListener('resize', windowResizeFunc)
    }
  }, [windowResizeFunc])

  const spanTitleNavClickHandler = (title: string) => {
    setActiveTitle(title)
    setVisibleMobileNav(prev => !prev)
  }

  return (
    <header 
      style={{ backdropFilter: "blur(15px)" }} 
      className='fixed left-0 right-0 py-3 lg:py-5 border-b-[1px] dark:border-gray-700 z-[100]'
      aria-label='navigate-wrapper'
      >
      <section className='container flex items-center justify-end'>
        {/* <button onClick={()=> router.push('/')}>
            <Image src='/logo.svg' alt='logo' width={40} height={40} />
        </button> */}
        <section className='flex items-center gap-3 lg:gap-5'>
          { mobileMode ? (
            <nav className='grid relative' aria-label='nav-small-mode'>
              <button onClick={()=> setVisibleMobileNav(prev => !prev)} 
               className='text-sky-400 border-[1px] dark:border-slate-600 rounded-full text-center dark:bg-dark lg:px-5 w-20 lg:w-24 py-1 lg:py-2 font-semibold first-letter:uppercase'
               >
                {router.pathname === '/[slug]' ? 'Blog' : activeTitle}
              </button>
              <AnimatePresence>
              {isVisibleMobileNav && (
                <motion.section 
                  initial={{ opacity: 0, top: 70 }}
                  animate={{ opacity: 1, top: 50 }}
                  exit={{ opacity: 0, top: 70 }}
                  className='absolute grid gap-3 bg-white w-24 text-center rounded-md py-2'
                  >
                  {NavigateList.map((nav, i) => (
                    <Link key={i} href={nav.href}>
                      <span onClick={()=> spanTitleNavClickHandler(nav.title)} className='font-semibold'>{nav.title}</span>
                    </Link>
                  ))}
                </motion.section>
              )}
              </AnimatePresence>
            </nav> )
            :
            ( <nav className='flex items-center gap-6 text-lg font-semibold' aria-label='nav-large-mode'>
                <CustomLink href='/'>Home</CustomLink>
                <CustomLink activeSlug={router.pathname === '/[slug]'} href='/blog'>Blog</CustomLink>
                <CustomLink href='/about'>About</CustomLink>
                <CustomLink href='/portfolio'>Portfolio</CustomLink>
              </nav> )
          }
          <section>
            {
              isDark ? 
              <button onClick={() => setDark(prev => !prev)} className='flex items-center justify-center ml-1 py-[1px]'>
                <MoonIcon />
              </button>
              :
              <button onClick={() => setDark(prev => !prev)} className='flex items-center justify-center py-[7px]'>
                <SunIcon />
              </button>
            }
            </section>
        </section>
      </section>
    </header>
  )
}