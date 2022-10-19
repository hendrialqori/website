import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { AppProvider } from '../context-manegement/store'
import '../styles/globals.css'
import '../styles/prism-one-dark.css'

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(()=> {
    if(typeof window !== 'undefined' || !localStorage?.theme) {
      localStorage.setItem('theme', 'light')
    }
  }, [])
  return (
      <AppProvider>
          <Component {...pageProps} names={"Hendri Alqori"} />
      </AppProvider>
  )
}

export default MyApp
