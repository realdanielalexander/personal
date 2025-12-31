import { Box, Heading, Text, Link } from '@chakra-ui/react'
import Head from 'next/head'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import StyledLink from '../../components/StyledLink'
import { remark } from 'remark'
import html from 'remark-html'
import { getAllProjects, getProjectBySlug } from '../../libs/posts'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import NextLink from 'next/link'
import {
  IoIosCalendar,
  IoIosPerson,
  IoIosSchool,
  IoIosPeople,
  IoIosCode,
  IoIosTime,
  IoIosLink,
  IoIosCheckmarkCircle
} from 'react-icons/io'

const markdownToHtml = async markdown => {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

const ProjectDetail = ({ project, nextProject }) => {
  const router = useRouter()
  const colorMode = useSelector(state => state.colorMode)
  
  if (!router.isFallback && !project?.slug) {
    return (
      <Layout>
        <Box>
          <Text>Project not found</Text>
        </Box>
      </Layout>
    )
  }
  
  return (
    <Layout>
      <Section>
        {router.isFallback ? (
          <Text>Loading…</Text>
        ) : (
          <>
            <Head>
              <title>Daniel Alexander - {project.title}</title>
            </Head>
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
                {/* Sidebar with project metadata */}
                <Box
                  display={{ base: 'flex', sm: 'flex', md: 'flex' }}
                  flexDirection={{ base: 'row', sm: 'row', md: 'column' }}
                  gap={{ base: 4, sm: 4, md: 0 }}
                  justifyContent={{ base: 'flex-start', sm: 'flex-start', md: 'flex-start' }}
                  alignItems={{ base: 'center', sm: 'center', md: 'center' }}
                  minH={{ base: 'auto', sm: 'auto', md: 'auto' }}
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
                  {/* Metadata Grid */}
                  <Box 
                    width="100%" 
                    fontSize="sm" 
                    textAlign={{ base: 'left', sm: 'left', md: 'left' }}
                    display="flex"
                    flexDirection="column"
                    justifyContent={{ base: 'center', sm: 'center', md: 'flex-start' }}
                    alignSelf={{ base: 'center', sm: 'center', md: 'auto' }}
                  >
                    {project.year && (
                      <Box 
                        display="grid" 
                        gridTemplateColumns="auto 1fr" 
                        gap={2} 
                        marginBottom={3}
                        alignItems="center"
                      >
                        <IoIosCalendar size={16} />
                        <Text fontWeight="medium">{project.year}</Text>
                      </Box>
                    )}

                    {project.role && (
                      <Box 
                        display="grid" 
                        gridTemplateColumns="auto 1fr" 
                        gap={2} 
                        marginBottom={3}
                        alignItems="center"
                      >
                        <IoIosPerson size={16} />
                        <Text fontWeight="medium">{project.role}</Text>
                      </Box>
                    )}

                    {project.context && (
                      <Box 
                        display="grid" 
                        gridTemplateColumns="auto 1fr" 
                        gap={2} 
                        marginBottom={3}
                        alignItems="center"
                      >
                        <IoIosSchool size={16} />
                        <Text>{project.context}</Text>
                      </Box>
                    )}

                    {project.team && (
                      <Box 
                        display="grid" 
                        gridTemplateColumns="auto 1fr" 
                        gap={2} 
                        marginBottom={3}
                        alignItems="flex-start"
                      >
                        <Box mt={0.5}>
                          <IoIosPeople size={16} />
                        </Box>
                        <Text>{project.team}</Text>
                      </Box>
                    )}

                    {project.technologies && (
                      <Box 
                        display="grid" 
                        gridTemplateColumns="auto 1fr" 
                        gap={2} 
                        marginBottom={3}
                        alignItems="flex-start"
                      >
                        <Box mt={0.5}>
                          <IoIosCode size={16} />
                        </Box>
                        <Text>{project.technologies}</Text>
                      </Box>
                    )}

                    {project.duration && (
                      <Box 
                        display="grid" 
                        gridTemplateColumns="auto 1fr" 
                        gap={2} 
                        marginBottom={3}
                        alignItems="center"
                      >
                        <IoIosTime size={16} />
                        <Text>{project.duration}</Text>
                      </Box>
                    )}

                    {project.status && (
                      <Box 
                        display="grid" 
                        gridTemplateColumns="auto 1fr" 
                        gap={2} 
                        marginBottom={3}
                        alignItems="center"
                      >
                        <IoIosCheckmarkCircle size={16} />
                        <Text>{project.status}</Text>
                      </Box>
                    )}

                    {project.links && (
                      <Box 
                        display="flex" 
                        flexDirection="column"
                        gap={2}
                        marginBottom={3}
                      >
                        {project.links.split(',').map((link, index) => {
                          const [label, url] = link.split('|').map(s => s.trim())
                          return (
                            <Box 
                              key={index}
                              display="grid" 
                              gridTemplateColumns="auto 1fr" 
                              gap={2} 
                              alignItems="center"
                            >
                              <IoIosLink size={16} />
                              <StyledLink href={url} isExternal>
                                {label}
                              </StyledLink>
                            </Box>
                          )
                        })}
                      </Box>
                    )}
                  </Box>
                </Box>

                {/* Main content */}
                <Box
                  flex="1"
                  display={{ base: 'flex', sm: 'flex', md: 'flex' }}
                  flexDirection="column"
                  justifyContent="flex-start"
                  paddingLeft={{ base: 0, sm: 0, md: 0 }}
                  marginLeft={{ base: 0, sm: 0, md: 0 }}
                >
                  {/* Extract and render video/image first */}
                  {project.media && (
                    <Box mb={8}>
                      <Box 
                        dangerouslySetInnerHTML={{ __html: project.media }}
                        sx={{
                          '& img': {
                            maxWidth: '100%',
                            borderRadius: '8px'
                          },
                          '& div': {
                            maxWidth: '100%'
                          }
                        }}
                      />
                    </Box>
                  )}
                  <Heading as={'h1'} fontSize="1.5rem" fontWeight="bold" mb={4}>
                    {project.title}
                  </Heading>
                  <Box
                    width="100%"
                    dangerouslySetInnerHTML={{ __html: project.content }}
                    sx={{
                      '& p': {
                        marginTop: 4,
                        lineHeight: 1.8
                      },
                      '& h2': {
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        marginTop: 8,
                        marginBottom: 4,
                        color: colorMode.accent
                      },
                      '& h3': {
                        fontSize: '1.25rem',
                        fontWeight: 'semibold',
                        marginTop: 6,
                        marginBottom: 2,
                        color: colorMode.accent
                      },
                      '& strong': {
                        color: colorMode.accent,
                        fontWeight: 'bold'
                      },
                      '& b': {
                        color: colorMode.accent,
                        fontWeight: 'bold'
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
                      '& img': {
                        maxWidth: '100%',
                        marginTop: '20px',
                        marginBottom: '20px',
                        borderRadius: '8px'
                      }
                    }}
                  />
                  {nextProject && (
                    <Box mt={12} pt={8} borderTop="1px solid" borderColor="gray.300">
                      <Text mb={4} fontSize="0.9rem" color="gray.600">
                        Next Project
                      </Text>
                      <NextLink href={`/projects/${nextProject.slug}`} passHref>
                        <Link
                          fontSize="1.25rem"
                          fontWeight="bold"
                          color={colorMode.accent}
                          textDecoration="none"
                          position="relative"
                          outline="none"
                          _focus={{ outline: 'none' }}
                          _hover={{
                            filter: 'brightness(1.2)',
                            _after: {
                              opacity: 1
                            }
                          }}
                          _after={{
                            content: '""',
                            position: 'absolute',
                            bottom: '-4px',
                            left: 0,
                            width: '100%',
                            height: '3px',
                            backgroundColor: colorMode.accent,
                            opacity: 0,
                            transition: 'opacity 0.2s ease-in-out'
                          }}
                          transition="filter 0.2s ease-in-out"
                        >
                          {nextProject.title} →
                        </Link>
                      </NextLink>
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          </>
        )}
      </Section>
    </Layout>
  )
}

export default ProjectDetail

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.slug, [
    'title',
    'slug',
    'content',
    'hook',
    'problem',
    'contribution',
    'result',
    'year',
    'role',
    'context',
    'team',
    'technologies',
    'duration',
    'status',
    'links'
  ])
  
  if (!project) {
    return {
      notFound: true
    }
  }
  
  // Get all projects to find the next one
  const allProjects = getAllProjects(['title', 'slug'])
  const currentIndex = allProjects.findIndex(p => p.slug === params.slug)
  const nextProject = currentIndex !== -1 && currentIndex < allProjects.length - 1 
    ? allProjects[currentIndex + 1]
    : allProjects.length > 0 && currentIndex === allProjects.length - 1
    ? allProjects[0] // Wrap around to first project
    : null
  
  let content = await markdownToHtml(project.content || '')
  
  // Extract the first image/video from content to render separately
  let media = null
  const imgMatch = content.match(/<p><img([^>]*)><\/p>|<img([^>]*)>/i)
  if (imgMatch) {
    media = imgMatch[0]
    // Remove the image from content
    content = content.replace(/<p><img([^>]*)><\/p>|<img([^>]*)>/i, '')
  }
  
  // Replace video placeholder with actual embed for PennOS
  if (project.slug === 'pennos') {
    const videoEmbed = `<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 20px 0;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 8px;" src="https://www.youtube.com/embed/R7lL76q0EQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>`
    // Check if video placeholder exists
    if (content.includes('[VIDEO_PENNOS]')) {
      media = videoEmbed
      content = content.replace(/<p>\[VIDEO_PENNOS\]<\/p>/g, '')
      content = content.replace(/\[VIDEO_PENNOS\]/g, '')
    }
  }
  
  // Replace video placeholder with actual embed for Mini Minecraft
  if (project.slug === 'mini-minecraft') {
    const videoEmbed = `<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 20px 0;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 8px;" src="https://www.youtube.com/embed/ebVe4SS4DKM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>`
    // Check if video placeholder exists
    if (content.includes('[VIDEO_MINI_MINECRAFT]')) {
      media = videoEmbed
      content = content.replace(/<p>\[VIDEO_MINI_MINECRAFT\]<\/p>/g, '')
      content = content.replace(/\[VIDEO_MINI_MINECRAFT\]/g, '')
    }
  }
  
  // Ensure img tags are properly formatted (markdown might wrap them in p tags)
  if (media) {
    media = media.replace(/<p><img([^>]*)><\/p>/g, '<img$1>')
  }

  return {
    props: {
      project: {
        ...project,
        content,
        media
      },
      nextProject
    }
  }
}

export async function getStaticPaths() {
  const projects = getAllProjects(['slug'])

  return {
    paths: projects.map(project => {
      return {
        params: {
          slug: project.slug
        }
      }
    }),
    fallback: false
  }
}
