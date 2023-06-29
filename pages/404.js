import NextLink from 'next/link'
import {
  Box,
  Heading,
  Container,
  Text,
  Divider,
  Button
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const NotFound = () => {
  return (
    <Layout mt={8} minHeight={'100vh'}>
      <Heading as="h1">Sorry!</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={8} />

      <Box my={8}>
        <NextLink href="/">
          <Button colorScheme="teal">Return to Home</Button>
        </NextLink>
      </Box>
    </Layout>
  )
}

export default NotFound
