import {
  Box,
  Heading,
  Image,
  Text
} from '@chakra-ui/react'
import {
  IoIosSchool,
  IoIosPin,
  IoMdMail
} from 'react-icons/io'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import StyledLink from '../components/StyledLink'
import { useSelector } from 'react-redux'
import React from 'react'
import { getBioContent, getProjectBySlug } from '../libs/posts'
import { remark } from 'remark'
import html from 'remark-html'

const heroLinks = [
  {
    label: 'Email',
    link: 'mailto:alexdan@purdue.edu'
  },
  {
    label: 'CV',
    link: '/cv.pdf'
  },
  {
    label: 'GitHub',
    link: 'https://github.com/realdanielalexander'
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/realdanielalexander/'
  }
]

const markdownToHtml = async markdown => {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

const Page = ({ bioContent }) => {
  // Set color scheme
  const colorMode = useSelector(state => state.colorMode)
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
                <Box
                  display="grid"
                  gridTemplateColumns="auto 1fr"
                  gap={2}
                  marginBottom={3}
                  alignItems="center"
                >
                  <IoIosSchool size={16} />
                  <Text fontWeight="medium">STyGIANet Group, Purdue University</Text>
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
                  <Text>West Lafayette, IN</Text>
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
                  <StyledLink href="mailto:alexdan@purdue.edu">
                    alexdan@purdue.edu
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
              {/* Hero */}
              <Box marginBottom={10} paddingTop={{ base: 0, md: '16px' }}>
                <Heading as="h1" fontSize="2rem" fontWeight="bold" color={colorMode.accent}>
                  Daniel Alexander
                </Heading>
                <Text fontSize="1.1rem" fontWeight="medium" marginTop={1}>
                  Computer Science PhD Student at Purdue University
                </Text>
                <Text fontSize="sm" opacity={0.7} marginTop={1}>
                  Reconfigurable Networks · Distributed Systems · Hardware–Software Co-Design
                </Text>
                <Text marginTop={4}>
                  I design algorithms and systems that coordinate application
                  communication with dynamically reconfigurable network fabrics.
                </Text>
                {/* <Box display="flex" flexWrap="wrap" gap={2} marginTop={4} fontSize="sm">
                  {heroLinks.map((item, index) => (
                    <React.Fragment key={item.label}>
                      {index > 0 && <Text as="span" opacity={0.7}>·</Text>}
                      <StyledLink
                        href={item.link}
                        isExternal={item.link.startsWith('http')}
                        fontWeight="medium"
                      >
                        {item.label}
                      </StyledLink>
                    </React.Fragment>
                  ))}
                </Box> */}
              </Box>

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
                    marginTop: 10,
                    marginBottom: 4,
                    color: colorMode.accent,
                    scrollMarginTop: '120px'
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
                  '& em, & .meta': {
                    fontStyle: 'normal',
                    fontSize: '0.9em',
                    opacity: 0.7
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
                    marginBottom: '1.75rem'
                  },
                  '& .inline-project p': {
                    marginTop: 2
                  },
                  '& .project-title': {
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    marginTop: 1,
                    marginBottom: 0
                  },
                  '& .project-link': {
                    color: colorMode.accent,
                    textDecoration: 'none'
                  },
                  '& .project-links a': {
                    fontSize: '0.9rem',
                    fontWeight: 'medium',
                    textDecoration: 'none'
                  },
                  '& .tag': {
                    display: 'inline-block',
                    fontSize: '0.7rem',
                    fontWeight: 'bold',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: colorMode.accent,
                    border: '1px solid',
                    borderColor: colorMode.accent,
                    borderRadius: '4px',
                    paddingX: '6px',
                    paddingY: '1px'
                  },
                  '& .project-thumb': {
                    width: '100%',
                    maxHeight: '220px',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    marginTop: 3,
                    backgroundColor: 'white'
                  },
                  '& .flow': {
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: 2,
                    marginTop: 4,
                    fontSize: '0.85rem'
                  },
                  '& .flow-step': {
                    border: '1px solid',
                    borderColor: colorMode.accent,
                    borderRadius: '6px',
                    paddingX: 2,
                    paddingY: 1
                  },
                  '& .flow-arrow': {
                    color: colorMode.accent
                  }
                }}
              />
            </Box>
          </Box>
        </Box>
      </Section>
    </Layout>
  )
}

export default Page

const slugify = text =>
  text
    .toLowerCase()
    .replace(/&amp;/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

// Parse the "Label|url, Label|url" format used by project frontmatter
const parseLinks = links =>
  (links || '')
    .split(',')
    .filter(link => link.includes('|'))
    .map(link => {
      const [label, url] = link.split('|').map(s => s.trim())
      return { label, url }
    })

const renderLinks = links =>
  `<p class="project-links">${links
    .map(({ label, url }) => {
      const external = url.startsWith('http')
        ? ' target="_blank" rel="noopener noreferrer"'
        : ''
      return `<a href="${url}" class="project-link"${external}>${label}</a>`
    })
    .join(' <span class="meta">·</span> ')}</p>`

const currentResearchHTML = `<div class="inline-project">
  <span class="tag">Ongoing Research</span>
  <h3 class="project-title">Reconfigurable Photonic Interconnects</h3>
  <p>Reconfigurable photonic interconnects can change which nodes are directly connected, but every reconfiguration takes time. I am investigating when a network should reconfigure its connectivity to create more direct communication paths, and when the resulting reconfiguration delay outweighs the savings from avoiding multihop communication.</p>
  <p>My current work develops simulation abstractions and workload-driven evaluations for studying this tradeoff, with longer-term interest in jointly optimizing workload placement, topology design, routing, and scheduling.</p>
  <div class="flow" role="img" aria-label="Workload placement, then communication demands, then topology and schedule, then completion time">
    ${[
      'Workload placement',
      'Communication demands',
      'Topology / schedule',
      'Completion time'
    ]
      .map(step => `<span class="flow-step">${step}</span>`)
      .join('<span class="flow-arrow">→</span>')}
  </div>
</div>`

export async function getStaticProps() {
  const bioContent = getBioContent()
  let content = await markdownToHtml(bioContent)

  // Give each section heading an anchor for the navbar
  content = content.replace(
    /<h2>(.*?)<\/h2>/g,
    (_, title) => `<h2 id="${slugify(title)}">${title}</h2>`
  )

  // Post-process sections: replace <strong> tags with <span class="school-name"> in résumé-style sections
  const sectionsToProcess = [
    'Publications and Preprints',
    'Experience',
    'Teaching',
    'Education',
    'Selected Awards'
  ]

  sectionsToProcess.forEach(sectionName => {
    const escapedName = sectionName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const sectionRegex = new RegExp(`(<h2[^>]*>${escapedName}<\/h2>[\\s\\S]*?)(?=<h2|$)`, 'i')
    content = content.replace(sectionRegex, (match) => {
      return match.replace(/<strong>(.*?)<\/strong>/g, '<span class="school-name">$1</span>')
    })
  })

  // Helper to generate a compact project card
  const generateProjectHTML = slug => {
    const project = getProjectBySlug(slug, ['title', 'slug', 'hook', 'label', 'thumbnail', 'links'])
    if (!project) return ''

    const projectLink = `/projects/${project.slug}`
    const links = [{ label: 'Project', url: projectLink }, ...parseLinks(project.links)]
    const tag = project.label ? `<span class="tag">${project.label}</span>` : ''
    const thumbnail = project.thumbnail
      ? `<img src="${project.thumbnail}" alt="${project.title} diagram" class="project-thumb" />`
      : ''

    return `<div class="inline-project">
      ${tag}
      <h3 class="project-title">
        <a href="${projectLink}" class="project-link">${project.title}</a>
      </h3>
      ${thumbnail}
      <p>${project.hook || ''}</p>
      ${renderLinks(links)}
    </div>`
  }

  // Replace placeholders (remark wraps them in paragraph tags)
  const placeholders = {
    CURRENT_RESEARCH: () => currentResearchHTML,
    PROJECT_DREX: () => generateProjectHTML('drex'),
    PROJECT_CONFLEXIT: () => generateProjectHTML('conflexit'),
    PROJECT_PENNCLOUD: () => generateProjectHTML('penncloud'),
    PROJECT_PENNOS: () => generateProjectHTML('pennos')
  }
  Object.entries(placeholders).forEach(([key, render]) => {
    content = content.replace(new RegExp(`(<p>)?\\[${key}\\](</p>)?`, 'g'), render())
  })

  return {
    props: {
      bioContent: content
    }
  }
}
