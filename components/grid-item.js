import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, AspectRatio } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const ProjectGridItem = ({ children, id, title, thumbnail }) => (
  <Box boxShadow={'0 4px 8px 0 rgba(0,0,0,0.2);'} w="100%" textAlign="center">
    <NextLink href={`/projects/${id}`} scroll={false}>
      <LinkBox cursor="pointer">
        <AspectRatio maxW="400px" ratio={4 / 3}>
          <Image src={thumbnail} alt={title} placeholder="blur" />
        </AspectRatio>
        <LinkOverlay>
          <Text as={'b'} p={2} mt={2} fontSize={20}>
            {title}
          </Text>
          <Text p={2} fontSize={14}>
            {children}
          </Text>
        </LinkOverlay>
      </LinkBox>
    </NextLink>
  </Box>
)
