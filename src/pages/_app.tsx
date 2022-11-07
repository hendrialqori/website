import Script from 'next/script'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { AppProvider } from '../context/store'
import { pageViewTracker } from '../libs/gtag'
import '../styles/globals.css'
import '../styles/prism-one-dark.css'

function MyApp({ Component, pageProps, router }: AppProps) {

  useEffect(()=> {
    if(typeof window !== 'undefined' || !localStorage?.theme) {
      localStorage.setItem('theme', 'light')
    }
  }, [])

  useEffect(()=> {
    const handleRouterChange = (url: string) => {
      pageViewTracker(url, document.title)
    }

    router.events.on('routeChangeComplete', handleRouterChange)
    return ()=> {
      router.events.off('routeChangeComplete', handleRouterChange)
    }
  }, [router.events])
  
  return (
      <AppProvider>
          <Component {...pageProps} names={"Hendri Alqori"} />
          <Script
            strategy='lazyOnload'
            async={true}
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG_ID}`}/>
          <Script id='GA' strategy='lazyOnload'>
            {
              `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GTAG_ID}');
              `
            }
          </Script>
      </AppProvider>
  )
}

export default MyApp
