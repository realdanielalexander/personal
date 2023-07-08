import React from 'react'
import NextLink from 'next/link'
import { Box, Image, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Section from '../components/section'

const GalleryItem = ({ src, alt, href, title }) => {
  return (
    <LinkBox display={'flex'} flexDirection={'column'}>
      <Box position={'relative'}>
        <Image
          src={src}
          alt={alt}
          width="100%"
          height={'200px'}
          objectFit={'cover'}
        />
        <Box
          position={'absolute'}
          width={'100%'}
          height={'100%'}
          left={0}
          top={0}
          // background={'blue'}
          background={'rgba(0, 0, 0, 0.4)'}
        >
          <LinkOverlay href={href}>
            <Text
              as="h1"
              fontSize={'1.5rem'}
              fontWeight={'bold'}
              color="white"
              position={'absolute'}
              bottom={4}
              left={4}
            >
              {title}
            </Text>
          </LinkOverlay>
        </Box>
      </Box>
    </LinkBox>
  )
}

export default GalleryItem
