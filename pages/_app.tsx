import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <AnimatePresence exitBeforeEnter>
    <ThemeProvider enableSystem={true} attribute="class" >
      <Component {...pageProps} />
    </ThemeProvider>
  </AnimatePresence>
  )
}

export default MyApp
