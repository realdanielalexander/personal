import { Image } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const Gallery = () => {
  return (
    <Layout>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
        <Masonry gutter={'16px'}>
          <Image src="/images/porsche/1.jpg" alt="porsche1" />
          <Image src="/images/porsche/2.jpg" alt="porsche2" />
          <Image src="/images/porsche/3.jpg" alt="porsche3" />
          {/* Demon */}
          {[...Array(12).keys()].map(index => {
            const src = `/images/mdc-demon/${index + 1}.jpg`
            const alt = `demon${index + 1}`
            return <Image key={index} src={src} alt={alt} />
          })}
        </Masonry>
      </ResponsiveMasonry>
    </Layout>
  )
}

export default Gallery
