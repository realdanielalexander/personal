import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Link,
  VStack,
  HStack,
  Divider
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'

const ProjectCard = ({ project }) => {
  const colorMode = useSelector(state => state.colorMode)
  
  return (
    <Box mb={8}>
      <Heading as="h3" fontSize="1.25rem" fontWeight="bold" mb={2}>
        <NextLink href={`/projects/${project.slug}`} passHref>
          <Link
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
            {project.title}
          </Link>
        </NextLink>
      </Heading>
      
      <Text mb={4} fontSize="1rem" color="gray.600">
        {project.hook}
      </Text>
      
      <VStack align="start" spacing={2} mb={4}>
        {project.problem && (
          <Text fontSize="0.95rem">
            <strong>Background:</strong> <Box as="span" fontWeight="normal">{project.problem}</Box>
          </Text>
        )}
        {project.contribution && (
          <Text fontSize="0.95rem">
            <strong>My Contribution:</strong> <Box as="span" fontWeight="normal">{project.contribution}</Box>
          </Text>
        )}
        {project.result && (
          <Text fontSize="0.95rem">
            <strong>Result:</strong> <Box as="span" fontWeight="normal">{project.result}</Box>
          </Text>
        )}
      </VStack>
      
      <HStack spacing={4}>
        <NextLink href={`/projects/${project.slug}`} passHref>
          <Link
            color={colorMode.accent}
            fontSize="0.9rem"
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
            Project page →
          </Link>
        </NextLink>
      </HStack>
      
      <Divider mt={6} />
    </Box>
  )
}

export default ProjectCard
