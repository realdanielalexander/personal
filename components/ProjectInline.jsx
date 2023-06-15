import NextLink from 'next/link'
import {
  Box,
  Container,
  Divider,
  Heading,
  LinkBox,
  LinkOverlay,
  Text
} from '@chakra-ui/react'
import React from 'react'

const ProjectInline = ({ children, id, title, thumbnail }) => {
  return (
    <LinkBox as={'article'} style={{ margin: 0, padding: 32 }}>
      <LinkOverlay href={`/projects/${id}`}>
        <Heading as={'h1'} fontSize="6xl" fontWeight="bold">
          {title}
        </Heading>
      </LinkOverlay>
      <Box style={{ marginTop: 16 }}>{children}</Box>
    </LinkBox>
  )
}

export default ProjectInline
