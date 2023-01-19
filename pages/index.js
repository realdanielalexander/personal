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
  Flex
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
import { ProjectGridItem } from '../components/grid-item'
import thumbRecipe from '../public/images/ingredients-detector-recipe-recommender.png'
import thumbSteganography from '../public/images/steganography.png'
import thumbGame from '../public/images/iosgamelibraryapp.png'
import thumbMillennial from '../public/images/millenialfashion.png'
import { BioDescription, BioSection, BioYear } from '../components/experiences'
import { useSelector } from 'react-redux'
import React from 'react'

const icons = [
  {
    label: 'Github Button',
    logo: IoLogoGithub,
    link: 'https://github.com/realdanielalexander'
  },
  {
    label: 'LinkedIn Button',
    logo: IoLogoLinkedin,
    link: 'https://www.linkedin.com/in/realdanielalexander/'
  },
  {
    label: 'Instagram Button',
    logo: IoLogoInstagram,
    link: 'https://github.com/realdanielalexander'
  },
  {
    label: 'YouTube Button',
    logo: IoLogoYoutube,
    link: 'https://www.youtube.com/channel/UCiywQf9i39QRnhLPdduVNUw'
  },
  {
    label: 'Mail Button',
    logo: IoMdMail,
    link: 'mailto:alexdan@sas.upenn.edu'
  }
]

const Page = () => {
  // Set color scheme
  const colorMode = useSelector(state => state.colorMode)
  return (
    <Layout>
      {/* Notification box */}
      {/* <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.600', 'whiteAlpha.200')}
          p={4}
          my={6}
        >
          Welcome to my personal page!
        </Box> */}
      <Flex
        h={'100vh'}
        flexDirection={'column'}
        justifyContent={'center'}
        flexGrow={1}
      >
        <Box>
          <Heading as="h2" variant="page-title" color={colorMode.accent}>
            Hi! I&apos;m <Text as="span">Daniel Alexander</Text>
          </Heading>
          <Text>
            A software engineer with 4+ years in front end development. I write,
            take pictures, and play music in my spare time.
          </Text>
          <Box display="flex" gap={'8'} flexGrow={1} mt={4}>
            {icons.map(icon => (
              <Link key={icon.label} href={icon.link} isExternal>
                <IconButton
                  href=""
                  aria-label={icon.label}
                  icon={React.createElement(icon.logo)}
                  color={colorMode.text}
                />
              </Link>
            ))}
          </Box>
        </Box>
      </Flex>
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
          <SimpleGrid columns={[1, 2, 2]} gap={4}>
            <ProjectGridItem
              id="recipe"
              title="Ingredients Detector and Recipe Recommender"
              thumbnail={thumbRecipe}
            >
              A multi-platform application that recommend recipes based on
              ingredients you own by performing a detection algorithm on your
              image
            </ProjectGridItem>
            <ProjectGridItem
              id="steganography"
              title="Least Significant Bit Steganography"
              thumbnail={thumbSteganography}
            >
              Hides your message text within an image
            </ProjectGridItem>
            <ProjectGridItem
              id="game"
              title="iOS Game Library App"
              thumbnail={thumbGame}
            >
              iOS app to browse video games and save them into your favorites.
            </ProjectGridItem>
            <ProjectGridItem
              id="millennial"
              title="Millennial Fashion"
              thumbnail={thumbMillennial}
            >
              Demonstrated end-to-end software engineering practices
            </ProjectGridItem>
          </SimpleGrid>
        </Container>
      </Section>
    </Layout>
  )
}

export default Page
