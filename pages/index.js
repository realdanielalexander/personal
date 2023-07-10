import NextLink from 'next/link'
import {
  Box,
  Container,
  Heading,
  Image,
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
import StyledLink from '../components/StyledLink'
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
    label: 'Email',
    link: 'mailto:realdanielalexander@gmail.com'
  },
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
  return (
    <Layout>
      <Section display="flex" alignItems="center" flexDirection={'row'}>
        <Box display="flex" flexDirection={'column'}>
          <Text as="h1" fontSize="2rem" fontWeight="bold">
            Daniel Alexander
          </Text>
          <Box
            display="flex"
            flexDirection={{ base: 'column-reverse', md: 'row' }}
            gap={8}
          >
            <Box>
              <Text>Hello! I&apos;m Daniel 😄</Text>
              <Text marginTop={4}>
                I&apos;m currently looking for PhD positions in Artificial
                Intelligence. My research interest is in Artificial
                Intelligence, Computer Vision, and Machine Learning for
                automation and sensing. In the past five years, I have gathered
                experience in front-end programming, computer graphics, and
                machine learning.
              </Text>
              <Text marginTop={4}>
                My{' '}
                <StyledLink href="https://ieeexplore.ieee.org/document/9972006">
                  undergraduate thesis
                </StyledLink>{' '}
                in computer vision, a research with{' '}
                <StyledLink href="https://scholar.google.com/citations?user=hxqXZbMAAAAJ&hl=en">
                  Dr. Hery Heryanto
                </StyledLink>{' '}
                and{' '}
                <StyledLink href="https://scholar.google.com/citations?user=s51dQZYAAAAJ&hl=en">
                  Hans Christian Kurniawan
                </StyledLink>{' '}
                to analyze the implementation of DeepLabV3+ on urban scenes of
                Bandung, Indonesia, was accepted and presented in the 2022 IEEE
                International Conference on Data and Software Engineering
                (ICoDSE).
              </Text>
              {/* contact section */}
              <Box
                display="flex"
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Box display="flex" gap={'8'} mt={4}>
                  {icons.map(icon => (
                    <StyledLink key={icon.label} href={icon.link} isExternal>
                      {icon.label}
                    </StyledLink>
                  ))}
                </Box>
                <Text marginTop={4} textAlign={'center'}>
                  Please reach out to me through email
                  realdanielalexander(at)gmail(dot)com
                </Text>
              </Box>
            </Box>

            <Box
              alignSelf={'start'}
              marginTop={4}
              h="100%"
              maxW={{ md: '200px' }}
            >
              <Image
                objectFit={'cover'}
                src="/images/profile1.jpeg"
                alt="profile"
                borderRadius={6400}
              />
            </Box>
          </Box>
        </Box>
      </Section>
      <Section delay={0.1} marginTop={16} display="flex" flexDirection="column">
        <Heading as="h3" variant="section-title">
          What I&apos;ve been up to
        </Heading>
        <Box display={'grid'} marginTop={4} gridTemplateColumns={'100px auto'}>
          <Text>Jan, 2023</Text>
          <Text>
            Started my role as a Frontend Engineer in the Shopee Indonesia
            Payment Processing (SIPP) 🛍️
          </Text>
          <Text>Nov, 2023</Text>
          <Text>
            Published and presented our paper{' '}
            <StyledLink href="https://ieeexplore.ieee.org/document/9972006">
              Application of Convolutional Neural Network for Semantic
              Segmentation of Bandung Urban Scenes
            </StyledLink>{' '}
            in the 2023 IEEE International Conference on Data and Software
            Engineering (ICoDSE) 📄
          </Text>
          <Text>Aug, 2022</Text>
          <Text>
            Started my role as a Junior Engineer at Shopee, received full
            training on software engineering 💻
          </Text>
          <Text>Jul, 2022</Text>
          <Text>
            Graduated with honors (best overall GPA) from Institut Teknologi
            Harapan Bangsa majoring in Informatics 🎓
          </Text>
          <Text>Aug 2021</Text>
          <Text>
            Studied abroad at the University of Pennsylvania, International
            Guest Student Program under the Indonesian International Student
            Mobility Program (IISMA) scholarship 🇺🇸
          </Text>
          <Text>Aug 2020</Text>
          <Text>
            Our capstone project Ingredients Detector and Recipe Recommender was
            awarded best capstone project in Google Bangkit Academy 🍳
          </Text>
          <Text>May 2020</Text>
          <Text>
            Started my role as a research assistant at the Web Intelligence and
            Data Mining Lab, National Central University Taiwan 🔬
          </Text>
        </Box>
      </Section>
    </Layout>
  )
}

export default Page
