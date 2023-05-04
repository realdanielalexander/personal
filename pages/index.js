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

const Page = () => {
  // Set color scheme
  const colorMode = useSelector(state => state.colorMode)
  return (
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
            fontSize={{ base: '2rem', md: '4rem' }}
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
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Experiences
        </Heading>
        <BioSection>
          <BioYear>
            July 2022 — December2022: Junior Software Engineer, Shopee |
            Jakarta, Indonesia
          </BioYear>
          <BioDescription>
            Went through six months of training program for full-stack web
            development
          </BioDescription>
        </BioSection>
        <BioSection>
          <BioYear>
            2018 — 2022 : Institut Teknologi Harapan Bangsa | Bandung, Indonesia
          </BioYear>
          <BioDescription>Bachelor&apos;s Degree in Informatics</BioDescription>
        </BioSection>
        <BioSection>
          <BioYear>
            August 2021 — December 2021: University of Pennsylvania |
            Philadelphia, PA
          </BioYear>
          <BioDescription>
            Study Abroad, International Guest Student Program
          </BioDescription>
        </BioSection>
        <BioSection>
          <BioYear>January 2021 — July 2021: Bangkit Academy</BioYear>
          <BioDescription>
            Machine Learning Academy led by Google, Tokopedia, Traveloka, and
            Gojek
          </BioDescription>
        </BioSection>
        <BioSection>
          <BioYear>
            May 2020 - Aug 2020: National Central University | Taoyuan City,
            Taiwan
          </BioYear>
          <BioDescription>
            Research Assistant at Web Intelligence and Data Mining (WIDM) Lab
          </BioDescription>
        </BioSection>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Projects
        </Heading>
        <Container maxW="100%" mt={8} mx={0}>
          <VStack divider={<StackDivider />} spacing={4} align={'stretch'}>
            <ProjectInline
              id="recipe"
              title="Ingredients Detector and Recipe Recommender"
              thumbnail={thumbRecipe}
            >
              A multi-platform application that recommend recipes based on
              ingredients you own by performing a detection algorithm on your
              image
            </ProjectInline>
            <ProjectInline
              id="steganography"
              title="Least Significant Bit Steganography"
              thumbnail={thumbSteganography}
            >
              Hides your message text within an image
            </ProjectInline>
            <ProjectInline
              id="game"
              title="iOS Game Library App"
              thumbnail={thumbGame}
            >
              iOS app to browse video games and save them into your favorites.
            </ProjectInline>
            <ProjectInline
              id="millennial"
              title="Millennial Fashion"
              thumbnail={thumbMillennial}
            >
              Demonstrated end-to-end software engineering practices
            </ProjectInline>
          </VStack>
        </Container>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Publications
        </Heading>
        <Container maxW="100%" mt={8} mx={0}>
          <VStack divider={<StackDivider />} spacing={4} align={'stretch'}>
            <ProjectInline
              id="application-of-convolutional-neural-network-for-semantic-segmentation-of-bandung-urban-scenes"
              title="Application of Convolutional Neural Network for Semantic
              Segmentation of Bandung Urban Scenes"
              thumbnail={thumbRecipe}
            >
              Application of Convolutional Neural Network for Semantic
              Segmentation of Bandung Urban Scenes
            </ProjectInline>
          </VStack>
        </Container>
      </Section>
    </Layout>
  )
}

export default Page
