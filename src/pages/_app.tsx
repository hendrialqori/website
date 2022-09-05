import type { AppProps } from 'next/app'
import { AppProvider } from '../context-manegement/store'
import '../styles/globals.css'
import '../styles/_modal.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
        <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
