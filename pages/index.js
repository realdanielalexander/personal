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
  IoIosSchool,
  IoLogoLinkedin,
  IoLogoYoutube,
  IoIosDesktop,
  IoIosPin,
  IoMdMail
} from 'react-icons/io';
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
import { getBioContent, getAllProjects, getProjectBySlug } from '../libs/posts'
import { remark } from 'remark'
import html from 'remark-html'
import ProjectCard from '../components/ProjectCard'

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

const markdownToHtml = async markdown => {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

const Page = ({ bioContent, projects }) => {
  // Set color scheme
  const colorMode = useSelector(state => state.colorMode)
  const [loading, setLoading] = useState(true)
  return (
    <Layout>
      <Section>
        <Box 
          display="flex" 
          flexDirection={'column'}
          width="100%"
        >
          <Box
            display={{ base: 'flex', sm: 'flex', md: 'flex' }}
            flexDirection={{ base: 'column', sm: 'column', md: 'row' }}
            alignItems={{ base: 'flex-start', sm: 'flex-start', md: 'stretch' }}
            gap={{ base: 4, sm: 4, md: 8 }}
          >
            {/* Image and Info Grid Container */}
            <Box
              display={{ base: 'flex', sm: 'flex', md: 'flex' }}
              flexDirection={{ base: 'row', sm: 'row', md: 'column' }}
              gap={{ base: 4, sm: 4, md: 0 }}
              justifyContent={{ base: 'flex-start', sm: 'flex-start', md: 'flex-start' }}
              alignItems={{ base: 'center', sm: 'center', md: 'center' }}
              minH={{ base: '200px', sm: '200px', md: 'auto' }}
              maxW={{ base: 'none', sm: 'none', md: '250px' }}
              alignSelf={{ base: 'flex-start', sm: 'flex-start', md: 'flex-start' }}
              flexShrink={0}
              position={{ base: 'relative', sm: 'relative', md: 'sticky' }}
              top={{ base: 'auto', sm: 'auto', md: '100px' }}
              left={{ base: 'auto', sm: 'auto', md: 'auto' }}
              height={{ base: 'auto', sm: 'auto', md: 'fit-content' }}
              zIndex={{ base: 'auto', sm: 'auto', md: 1 }}
              paddingTop={{ base: 0, sm: 0, md: '16px' }}
              marginTop={{ base: -4, sm: -4, md: 0 }}
            >
              {/* Image */}
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                width={{ base: 'auto', sm: 'auto', md: 'auto' }}
                minW={{ base: '140px', sm: '140px', md: '200px' }}
                alignSelf={{ base: 'center', sm: 'center', md: 'auto' }}
                flexShrink={0}
              >
                <Image
                  objectFit="cover"
                  src="/images/profile1.jpeg"
                  alt="profile"
                  borderRadius={6400}
                  width={{ base: '140px', sm: '140px', md: '200px' }}
                  height={{ base: '140px', sm: '140px', md: '200px' }}
                  marginBottom={{ base: 0, sm: 0, md: 4 }}
                />
              </Box>
              
              {/* Info Grid */}
              <Box 
                width="100%" 
                fontSize="sm" 
                textAlign={{ base: 'left', sm: 'left', md: 'left' }}
                display="flex"
                flexDirection="column"
                justifyContent={{ base: 'center', sm: 'center', md: 'flex-start' }}
                alignSelf={{ base: 'center', sm: 'center', md: 'auto' }}
              >
                {/* Description spanning two columns */}
                <Box 
                  display="grid" 
                  gridTemplateColumns="auto 1fr" 
                  gap={2} 
                  marginBottom={3}
                  alignItems="center"
                >
                  <IoIosDesktop size={16} />
                  <Text fontWeight="medium">Systems Researcher</Text>
                </Box>

                <Box 
                  display="grid" 
                  gridTemplateColumns="auto 1fr" 
                  gap={2} 
                  marginBottom={3}
                  alignItems="center"
                >
                  <IoIosSchool size={16} />
                  <Text fontWeight="medium">University of Pennsylvania</Text>
                </Box>
                
                {/* Location */}
                <Box 
                  display="grid" 
                  gridTemplateColumns="auto 1fr" 
                  gap={2} 
                  marginBottom={3}
                  alignItems="center"
                >
                  <IoIosPin size={16} />
                  <Text>Philadelphia, PA</Text>
                </Box>
                
                {/* Email */}
                <Box 
                  display="grid" 
                  gridTemplateColumns="auto 1fr" 
                  gap={2} 
                  marginBottom={3}
                  alignItems="center"
                >
                  <IoMdMail size={16} />
                  <StyledLink href="mailto:alexdan@seas.upenn.edu">
                    alexdan@seas.upenn.edu
                  </StyledLink>
                </Box>
              </Box>
            </Box>

            <Box
              flex="1"
              display={{ base: 'flex', sm: 'flex', md: 'flex' }}
              flexDirection="column"
              justifyContent="flex-start"
              paddingLeft={{ base: 0, sm: 0, md: 0 }}
              marginLeft={{ base: 0, sm: 0, md: 0 }}
            >
              <Box
                dangerouslySetInnerHTML={{ __html: bioContent }}
                sx={{
                  color: colorMode.text,
                  '& p': {
                    marginTop: 4
                  },
                  '& h2': {
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    marginTop: 8,
                    marginBottom: 4,
                    color: colorMode.accent
                  },
                  '& h2:first-of-type': {
                    marginTop: 0
                  },
                  '& h3': {
                    fontSize: '1.25rem',
                    fontWeight: 'semibold',
                    marginTop: 6,
                    marginBottom: 2,
                    color: colorMode.accent
                  },
                  '& .school-name': {
                    color: colorMode.accent,
                    fontWeight: 'medium'
                  },
                  '& strong': {
                    color: colorMode.accent
                  },
                  '& b': {
                    color: colorMode.accent
                  },
                  '& a': {
                    color: colorMode.accent,
                    textDecoration: 'underline'
                  },
                  '& hr': {
                    marginTop: 4,
                    marginBottom: 6,
                    borderColor: 'gray.300'
                  },
                  '& ul': {
                    marginLeft: 6,
                    marginTop: 2,
                    marginBottom: 4
                  },
                  '& ol': {
                    marginLeft: 6,
                    marginTop: 2,
                    marginBottom: 4
                  },
                  '& li': {
                    marginBottom: 2
                  },
                  '& .inline-project': {
                    marginBottom: '2rem'
                  },
                  '& .project-title': {
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem'
                  },
                  '& .project-link': {
                    color: colorMode.accent,
                    textDecoration: 'none'
                  }
                }}
              />
              {/* contact section */}
              <Box
                display="flex"
                flexDirection={'column'}
                alignItems={'center'}
              >
                {/* <Box display="flex" gap={'8'} mt={4}>
                  {icons.map(icon => (
                    <StyledLink key={icon.label} href={icon.link} isExternal>
                      {icon.label}
                    </StyledLink>
                  ))}
                </Box> */}
              </Box>
              
            </Box>
          </Box>
        </Box>
      </Section>
    </Layout>
  )
}

export default Page

export async function getStaticProps() {
  const bioContent = getBioContent()
  let content = await markdownToHtml(bioContent)
  
  // Replace video placeholder with actual embed
  const videoEmbed = `<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 20px 0;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 8px;" src="https://www.youtube.com/embed/R7lL76q0EQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>`
  
  // Replace placeholder, handling cases where it might be wrapped in paragraph tags
  content = content.replace(/<p>\[VIDEO_PENNOS\]<\/p>/g, videoEmbed)
  content = content.replace(/\[VIDEO_PENNOS\]/g, videoEmbed)
  
  // Post-process sections: replace <strong> tags with <span class="school-name"> in Education, Preprints, Publications, Selected Projects, Teaching Experience, Industry Experience, and Honors & Awards sections
  const sectionsToProcess = [
    'Education',
    'Preprints',
    'Publications',
    'Selected Projects',
    'Teaching Experience',
    'Industry Experience',
    'Honors & Awards'
  ]
  
  sectionsToProcess.forEach(sectionName => {
    const escapedName = sectionName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const sectionRegex = new RegExp(`(<h2>${escapedName}<\/h2>[\\s\\S]*?)(?=<h2>|$)`, 'i')
    content = content.replace(sectionRegex, (match) => {
      return match.replace(/<strong>(.*?)<\/strong>/g, '<span class="school-name">$1</span>')
    })
  })

  // Get specific projects for inline rendering
  const drexProject = getProjectBySlug('drex', ['title', 'slug', 'hook', 'problem', 'contribution', 'result'])
  const pennosProject = getProjectBySlug('pennos', ['title', 'slug', 'hook', 'problem', 'contribution', 'result'])
  const penncloudProject = getProjectBySlug('penncloud', ['title', 'slug', 'hook', 'problem', 'contribution', 'result'])
  const miniMinecraftProject = getProjectBySlug('mini-minecraft', ['title', 'slug', 'hook', 'problem', 'contribution', 'result'])
  
  // Helper to generate project HTML with simplified format
  const generateProjectHTML = (project) => {
    if (!project) return ''
    
    const projectLink = `/projects/${project.slug}`
    
    // Get custom hook or use default hook
    let hook = project.hook || ''
    
    // Use custom hooks if they exist (for projects that need different descriptions)
    const customHooks = {
      'drex': 'Re-architects early-exit LLM serving by rebatching across exit depths to reduce KV-cache waste and tail latency.',
      'pennos': 'UNIX-like OS kernel implemented in C, featuring preemptive scheduling, virtual memory, IPC, and a FAT-based file system.',
      'penncloud': 'Distributed email and file-storage platform built on a custom replicated key-value store with strong consistency and transparent failover.',
      'mini-minecraft': 'Voxel-based engine built in C++/OpenGL with custom shaders, physics, collision handling, and GUI systems.'
    }
    
    if (customHooks[project.slug]) {
      hook = customHooks[project.slug]
    }
    
    const html = `<div class="inline-project" style="margin-bottom: 1.5rem;">
      <h3 class="project-title" style="font-size: 1.25rem; font-weight: bold; margin-bottom: 0.5rem;">
        <a href="${projectLink}" class="project-link" style="text-decoration: none;">${project.title}</a>
      </h3>
      <p style="font-size: 1rem; margin-bottom: 1rem;">${hook}</p>
      <p style="margin-bottom: 1.5rem;"><a href="${projectLink}" class="project-link" style="font-size: 0.9rem; text-decoration: none;">Project page →</a></p>
    </div>`
    
    return html
  }
  
  // Replace project placeholders
  content = content.replace(/\[PROJECT_DREX_FEATURED\]/g, generateProjectHTML(drexProject))
  content = content.replace(/\[PROJECT_PENNOS_FEATURED\]/g, generateProjectHTML(pennosProject))
  content = content.replace(/\[PROJECT_PENNCLOUD_FEATURED\]/g, generateProjectHTML(penncloudProject))
  content = content.replace(/\[PROJECT_MINI_MINECRAFT_CONDENSED\]/g, generateProjectHTML(miniMinecraftProject))
  
  // Get all projects for the bottom section (if still needed)
  const projects = getAllProjects([
    'title',
    'slug',
    'hook',
    'problem',
    'contribution',
    'result',
    'type'
  ])

  return {
    props: {
      bioContent: content,
      projects: [] // Empty array since projects are now inline
    }
  }
}
