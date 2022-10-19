import Image from 'next/image'
import { BiSearchAlt } from 'react-icons/bi'
import { BsMoonStarsFill } from 'react-icons/bs'
import { useStore } from '../context-manegement/store'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { memo, useEffect, useState } from 'react'
import { CustomLink } from './activeClassRoute'

const SunIcon = memo(function _(){
  return <Image src='/sun.svg' width={23} height={23} alt='moon-icon'/>
})

const MoonIcon = memo(function _(){
  return <Image src='/moon.svg' width={19} height={19} alt='moon-icon'/>
})

export const Navigate:React.FC = () => {
  const router = useRouter()

  const [isDark, setDark] = useState<boolean>(
    typeof window !== 'undefined' && localStorage?.theme === 'dark'
    ? true : false
  )

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
    <header 
      style={{ backdropFilter: "blur(15px)" }} 
      className='fixed left-0 right-0 py-3 lg:py-5 border-b-[1px] dark:border-gray-700 z-[100]'
      >
      <section className='container flex items-center justify-between'>
        <button onClick={()=> router.push('/')}>
            <Image src='/logo.svg' alt='logo' width={40} height={40} />
        </button>
        <nav className='text-lg font-semibold flex items-center gap-6'>
            <CustomLink href='/'>Home</CustomLink>
            <CustomLink activeSlug={router.pathname === '/[slug]'} href='/blog'>Blog</CustomLink>
            <CustomLink href='/about'>About</CustomLink>
            <CustomLink href='/portfolio'>Portfolio</CustomLink>
            {
              isDark ? 
              <button onClick={() => setDark(prev => !prev)} className='flex items-center justify-center ml-2 py-[1px] rounded-md'>
                <MoonIcon />
              </button>
              :
              <button onClick={() => setDark(prev => !prev)} className='flex items-center justify-center py-[7px] rounded-lg'>
                <SunIcon />
              </button>
            }
        </nav>
      </section>
    </header>
  )
}