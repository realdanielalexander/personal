import NextLink from 'next/link'
import { Box, Image, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Section from '../components/section'
import GalleryItem from '../components/gallery-item'

const Gallery = () => {
  return (
    <Layout>
      <Section delay={0.1}>
        <Text as="h1" fontSize="2rem" fontWeight="bold">
          Gallery 📷
        </Text>
        <Text as="p">
          I like to take pictures of (mainly) cars and motor vehicles. These are
          some select vehicles that I have had the opportunity to shoot.
        </Text>
        <Box marginTop={8} display="flex" flexDirection={'column'} gap={8}>
          <GalleryItem
            src={'/images/porsche/1.jpg'}
            alt="911"
            href="/gallery/skirts-911"
            title="Porsche 911 Carrera"
          />
          <GalleryItem
            src={'/images/mdc-demon/3.jpg'}
            alt="demon"
            href="/gallery/mdc-demon"
            title="Dodge Demon"
          />
        </Box>
      </Section>
    </Layout>
  )
}

export default Gallery
