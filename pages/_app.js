import * as React from 'react'
import { useEffect, useRef } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../libs/theme'
import { AnimatePresence } from 'framer-motion'
import wrapper from '../store'

const Website = ({ Component, pageProps, router }) => {
  const scrollPositionRef = useRef(0)

  useEffect(() => {
    // Store current scroll position and lock it when navigation starts
    const handleRouteChangeStart = () => {
      scrollPositionRef.current = window.scrollY
      
      // Prevent scroll by locking the position
      const scrollY = window.scrollY
      document.documentElement.style.scrollBehavior = 'auto'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
    }

    // Restore normal scrolling after transition completes
    const handleRouteChangeComplete = () => {
      // Small delay to ensure exit animation completes
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = ''
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        // Scroll to top for the new page
        window.scrollTo(0, 0)
      }, 400) // Match the animation duration
    }

    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)

    // Disable Next.js automatic scroll restoration
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [router])

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence 
          exitBeforeEnter 
          initial={true}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default wrapper.withRedux(Website)
