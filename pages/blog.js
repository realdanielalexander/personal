import NextLink from 'next/link'
import {
  Box,
  Container,
  Heading,
  Image,
  Link,
  Button,
  useColorModeValue,
  IconButton,
  SimpleGrid
} from '@chakra-ui/react'
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoYoutube,
  IoMdMail
} from 'react-icons/io'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Logo from '../components/logo'
import Navbar from '../components/navbar'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import thumbStudyAbroad from '../public/images/studying-abroad.jpg'
import { BioDescription, BioSection, BioYear } from '../components/bio'
import { BlogGridItem } from '../components/blog-grid-item'

import { getSortedPostsData } from '../libs/posts'

const Blog = ({ allPostsData }) => {
  return (
    <Layout>
      <Container maxW="container.md">
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Posts
          </Heading>

          <Box
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.600', 'whiteAlpha.200')}
            p={4}
            my={6}
          >
            Here, I try to document my thoughts and learning processes. I
            believe that becoming a better version of myself require constant
            reflection of the things that I do. I hope you find these articles
            helpful in one way or another. :)
          </Box>
          <Container maxW="100%" mt={8} mx={0}>
            <SimpleGrid columns={[1, 2, 2]} gap={4}>
              {allPostsData.map(({ excerpt, slug, id, title, thumbnail }) => (
                <BlogGridItem
                  key={id}
                  id={slug}
                  title={title}
                  thumbnail={thumbnail}
                >
                  {excerpt}
                </BlogGridItem>
              ))}
            </SimpleGrid>
          </Container>
        </Section>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default Blog
