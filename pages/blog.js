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
import { BioDescription, BioSection, BioYear } from '../components/experiences'
import { BlogGridItem } from '../components/blog-grid-item'

import { getSortedPostsData } from '../libs/posts'

const Blog = ({ allPostsData }) => {
  return (
    <Layout>
      <Section
        minH={'100vh'}
        flexDirection={'column'}
        justifyContent={'center'}
      >
        <Box maxW="100%" pt={24}>
          <SimpleGrid columns={[1, 1, 2, 2, 3]} gap={8}>
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
        </Box>
      </Section>
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
