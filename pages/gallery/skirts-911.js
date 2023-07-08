import { Box, Image, Text } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Section from '../../components/section'

const Skirts911 = () => {
  return (
    <Layout>
      <Section delay={0.1}>
        <Text as="h1" fontSize="2rem" fontWeight="bold">
          Porsche 911 Carrera
        </Text>
        <Text as="p">Shot at SKIRTS Grill &amp; Bar</Text>
        <Box marginTop={8}></Box>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
          <Masonry gutter={'16px'}>
            <Image src="/images/porsche/1.jpg" alt="porsche1" />
            <Image src="/images/porsche/2.jpg" alt="porsche2" />
            <Image src="/images/porsche/3.jpg" alt="porsche3" />
          </Masonry>
        </ResponsiveMasonry>
      </Section>
    </Layout>
  )
}

export default Skirts911
