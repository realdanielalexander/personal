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
import { ProjectGridItem } from '../components/grid-item'
import thumbRecipe from '../public/images/ingredients-detector-recipe-recommender.png'
import thumbSteganography from '../public/images/steganography.png'
import thumbGame from '../public/images/iosgamelibraryapp.png'
import thumbMillennial from '../public/images/millenialfashion.png'
import { BioDescription, BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Layout>
      <Container maxW="container.md">
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.600', 'whiteAlpha.200')}
          p={4}
          my={6}
        >
          Welcome to my personal page!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Daniel Alexander
            </Heading>
            💻 Software Developer | 📸 Photographer | 🎹 Musician
            <Box
              display="flex"
              justifyContent="space-around"
              maxW="320px"
              flexGrow={1}
              mt={4}
            >
              <Link href="https://github.com/realdanielalexander" isExternal>
                <IconButton
                  aria-label="Github Button"
                  icon={<IoLogoGithub />}
                  color={useColorModeValue('black', '#FFFFFF')}
                />
              </Link>

              <Link
                href="https://www.linkedin.com/in/realdanielalexander/"
                isExternal
              >
                <IconButton
                  aria-label="LinkedIn Button"
                  icon={<IoLogoLinkedin />}
                  color={useColorModeValue('black', '#FFFFFF')}
                />
              </Link>

              <Link href="https://www.instagram.com/dalxndr/" isExternal>
                <IconButton
                  href=""
                  aria-label="Instagram Button"
                  icon={<IoLogoInstagram />}
                  color={useColorModeValue('black', '#FFFFFF')}
                />
              </Link>

              <Link
                href="https://www.youtube.com/channel/UCiywQf9i39QRnhLPdduVNUw"
                isExternal
              >
                <IconButton
                  href=""
                  aria-label="Youtube Button"
                  icon={<IoLogoYoutube />}
                  color={useColorModeValue('black', '#FFFFFF')}
                />
              </Link>

              <Link href="mailto:alexdan@sas.upenn.edu" isExternal>
                <IconButton
                  href=""
                  aria-label="Mail Button"
                  icon={<IoMdMail />}
                  color={useColorModeValue('black', '#FFFFFF')}
                />
              </Link>
            </Box>
          </Box>

          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="130px"
              display="inline-block"
              borderRadius="12"
              src="/images/profile.jpeg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>
              2018 — 2022 : Institut Teknologi Harapan Bangsa | Bandung,
              Indonesia
            </BioYear>
            <BioDescription>
              Bachelor&apos;s Degree in Informatics
            </BioDescription>
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
              <Section>
                <ProjectGridItem
                  id="recipe"
                  title="Ingredients Detector and Recipe Recommender"
                  thumbnail={thumbRecipe}
                >
                  A multi-platform application that recommend recipes based on
                  ingredients you own by performing a detection algorithm on
                  your image
                </ProjectGridItem>
              </Section>
              <Section>
                <ProjectGridItem
                  id="steganography"
                  title="Least Significant Bit Steganography"
                  thumbnail={thumbSteganography}
                >
                  Hides your message text within an image
                </ProjectGridItem>
              </Section>
              <Section>
                <ProjectGridItem
                  id="game"
                  title="iOS Game Library App"
                  thumbnail={thumbGame}
                >
                  iOS app to browse video games and save them into your
                  favorites.
                </ProjectGridItem>
              </Section>
              <Section>
                <ProjectGridItem
                  id="millennial"
                  title="Millennial Fashion"
                  thumbnail={thumbMillennial}
                >
                  Demonstrated end-to-end software engineering practices
                </ProjectGridItem>
              </Section>
            </SimpleGrid>
          </Container>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
