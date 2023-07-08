import { Box, Image, Text } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Section from '../../components/section'

const MDCDemon = () => {
  return (
    <Layout>
      <Section delay={0.1}>
        <Text as="h1" fontSize="2rem" fontWeight="bold">
          Dodge Demon
        </Text>
        <Text as="p">Short at Morning Drivers Club, Mitra Terrace.</Text>
        <Box marginTop={8}></Box>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
          <Masonry gutter={'16px'}>
            {/* Demon */}
            {[...Array(12).keys()].map(index => {
              const src = `/images/mdc-demon/${index + 1}.jpg`
              const alt = `demon${index + 1}`
              return <Image key={index} src={src} alt={alt} />
            })}
          </Masonry>
        </ResponsiveMasonry>
      </Section>
    </Layout>
  )
}

export default MDCDemon
