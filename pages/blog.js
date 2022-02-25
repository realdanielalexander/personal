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

const Blog = () => {
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
              <Section>
                <BlogGridItem
                  id="studying-abroad-my-experience"
                  title="Studying Abroad — My Experience"
                  thumbnail={thumbStudyAbroad}
                >
                  Looking out through the window in my American Airlines flight
                  as the aircraft descended for landing at the Philadelphia
                  International Airport, I still couldn’t believe that I was
                  given the opportunity to study abroad for a semester at the
                  University of Pennsylvania. How did it go, you might naturally
                  ask, I will try to break down my experience in this short
                  write-up.
                </BlogGridItem>
              </Section>
            </SimpleGrid>
          </Container>
        </Section>
      </Container>
    </Layout>
  )
}

export default Blog
