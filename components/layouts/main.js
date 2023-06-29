import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
import { useDispatch, useSelector } from 'react-redux'
import Copyright from '../Copyright'

const Main = ({ children, router }) => {
  // Set color scheme
  const colorMode = useSelector(state => state.colorMode)
  const dispatch = useDispatch()
  return (
    <Box
      bg={colorMode.background}
      textColor={colorMode.text}
      style={{
        transition: 'all .5s ease',
        WebkitTransition: 'all .5s ease',
        MozTransition: 'all .5s ease'
      }}
      as="main"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial scale=1" />
        <title>Daniel Alexander - Homepage</title>
      </Head>
      <Navbar path={router.asPath}></Navbar>
      <Container maxW="container.md" flexGrow={1}>
        {children}
      </Container>
      <Copyright />
    </Box>
  )
}

export default Main
