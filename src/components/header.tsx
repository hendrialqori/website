import Image from 'next/image'
import { useRouter } from 'next/router'
import { memo, useEffect, useState } from 'react'
import { CustomLink } from './custom-link'
import { AnimatePresence, motion } from 'framer-motion'
import { GrFormClose } from 'react-icons/gr'


const SunIcon = memo(function _(){
  return <Image src='/sun.svg' width={20} height={20} alt='moon-icon'/>
})

const MoonIcon = memo(function _(){
  return <Image src='/moon.svg' width={17} height={17} alt='moon-icon'/>
})

export const Navigate:React.FC = () => {
  const router = useRouter()

  const [isDark, setDark] = useState<boolean>(
    typeof window !== 'undefined' && localStorage?.theme === 'dark'
    ? true : false
  )
  const [mobileMode, setMobileMode] = useState(false)

  useEffect(()=> {
    if (isDark){
      document.documentElement.setAttribute('data-mode', "dark")
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-mode', "")
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <>
    <header 
      style={{ backdropFilter: "blur(15px)" }} 
      className='fixed left-0 right-0 py-[1rem] md:py-[26px] dark:border-gray-700 z-[9]'
      aria-label='navigate-wrapper'
      >
      <section className='container flex items-center justify-between'>
      <section>
        {
          isDark ? 
          <button 
            onClick={() => setDark(prev => !prev)} 
            className='flex items-center justify-center ml-1 py-[8px]'
            >
            <MoonIcon />
          </button>
          :
          <button 
            onClick={() => setDark(prev => !prev)} 
            className='flex items-center justify-center py-[7px]'
            >
            <SunIcon />
          </button>
        }
        </section>
        <section className='flex items-center gap-3 lg:gap-5'>
         <nav 
          className='
            hidden md:flex
            md:relative md:flex-row items-center justify-center gap-2 
            ' 
            aria-label='nav-large-mode'>
            <CustomLink href='/'>Home</CustomLink>
            <CustomLink activeSlug={router.pathname === '/blog/[slug]'} href='/blog'>Blog</CustomLink>
            <CustomLink href='/about'>About</CustomLink>
            <CustomLink href='/portfolio'>Portfolio</CustomLink>
            <CustomLink href='/snippet'>Snippets</CustomLink>
          </nav> 
          <button onClick={()=> setMobileMode(P => !P)} className='md:hidden' aria-label='toggle-menus-botton'>
            <div></div>
            <div></div>
          </button>
        </section>
      </section>
    </header>
    {
      mobileMode ? 
      (
        <AnimatePresence>
          <motion.section
            initial={{left: -30, opacity: 0}}
            animate={{left: 0, opacity: 1}}
            className='md:hidden fixed top-0 inset-0 bg-light/50 dark:bg-dark/50 z-[10]'>
            <nav 
              className='flex flex-col gap-5 bg-light dark:bg-dark p-7'
              onClick={()=> setMobileMode(P => !P)} 
              aria-label='nav-mobile-mode'
              >
              <button className='md:hidden'>
                <GrFormClose className='dark:bg-white text-lg' />
              </button>
              <CustomLink href='/'>Home</CustomLink>
              <CustomLink activeSlug={router.pathname === '/[slug]'} href='/blog'>Blog</CustomLink>
              <CustomLink href='/about'>About</CustomLink>
              <CustomLink href='/portfolio'>Portfolio</CustomLink>
              <CustomLink href='/snippet'>Snippets</CustomLink>
            </nav>
          </motion.section>
        </AnimatePresence>
      ) : null
    }
    
    </>
  )
}