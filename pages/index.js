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
  SimpleGrid,
  Text,
  Flex,
  VStack,
  StackDivider
} from '@chakra-ui/react'
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoYoutube,
  IoMdMail
} from 'react-icons/io'
import P from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Logo from '../components/logo'
import Navbar from '../components/navbar'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ProjectGridItem } from '../components/grid-item'
import thumbRecipe from '../public/images/ingredients-detector-recipe-recommender.png'
import thumbSteganography from '../public/images/steganography.png'
import thumbGame from '../public/images/iosgamelibraryapp.png'
import thumbMillennial from '../public/images/millenialfashion.png'
import { BioDescription, BioSection, BioYear } from '../components/experiences'
import { useSelector } from 'react-redux'
import React from 'react'
import ProjectInline from '../components/ProjectInline'
import StyledBox from '../components/HeadingSection'
import { useState, useEffect } from 'react'

const icons = [
  {
    label: 'Resume',
    link: 'https://github.com/realdanielalexander'
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/realdanielalexander/'
  },
  {
    label: 'Instagram',
    link: 'https://instagram.com/heydanzo'
  }
]

const Loader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000)

    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <Layout>
      <Box
        h={'100vh'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Text>Loading awesomeness...</Text>
      </Box>
    </Layout>
  )
}

const Page = () => {
  // Set color scheme
  const colorMode = useSelector(state => state.colorMode)
  const [loading, setLoading] = useState(true)
  return loading ? (
    <Loader setLoading={setLoading} />
  ) : (
    <Layout>
      <Section
        h={'100vh'}
        flexDirection={'column'}
        justifyContent={'center'}
        position="relative"
      >
        <StyledBox maxW="2xl" position={'absolute'} bottom={16}>
          <Text
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: 'GrayText',
              letterSpacing: 8,
              textTransform: 'uppercase'
            }}
          >
            Daniel Alexander
          </Text>
          <Heading
            fontSize={{ base: '4rem' }}
            as="h1"
            variant="page-title"
            color={colorMode.accent}
          >
            <Text>Computer Vision and Graphics Researcher</Text>
          </Heading>
          <P>
            I&apos;m currently looking for research and academic opportunities
            and I have published a{' '}
            <Link href="https://ieeexplore.ieee.org/document/9972006">
              paper
            </Link>{' '}
            on computer vision in the IEEE Xplore. In the past five years, I
            have gathered experience in front-end programming, computer
            graphics, and machine learning.
          </P>
          <Box display="flex" gap={'8'} flexGrow={1} mt={4}>
            {icons.map(icon => (
              <Link key={icon.label} href={icon.link} isExternal>
                {icon.label}
              </Link>
            ))}
          </Box>
        </StyledBox>
      </Section>
      <Section delay={0.1} display="grid">
        <Heading as="h3" variant="section-title">
          News
        </Heading>
        <Box display={'grid'} gridTemplateColumns={'100px auto'}>
          <Text>Jan, 2023</Text>
          <Text>
            Started my role as a Frontend Engineer in the Shopee Indonesia
            Payment Processing (SIPP).
          </Text>
          <Text>Nov, 2023</Text>
          <Text>
            Published and presented our paper{' '}
            <Link href="https://ieeexplore.ieee.org/document/9972006">
              Application of Convolutional Neural Network for Semantic
              Segmentation of Bandung Urban Scenes
            </Link>{' '}
            in the 2023 IEEE International Conference on Data and Software
            Engineering (ICoDSE).
          </Text>
          <Text>Aug, 2022</Text>
          <Text>
            Started my role as a Junior Engineer at Shopee, received full
            training on software engineering.
          </Text>
          <Text>Jul, 2022</Text>
          <Text>
            Graduated with honors (best overall GPA) from Institut Teknologi
            Harapan Bangsa majoring in Informatics.
          </Text>
          <Text>Aug 2021</Text>
          <Text>
            Studied abroad at the University of Pennsylvania, International
            Guest Student Program under the Indonesian International Student
            Mobility Program (IISMA) scholarship.
          </Text>
        </Box>
      </Section>
    </Layout>
  )
}

export default Page
