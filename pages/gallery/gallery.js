import { Image } from '@chakra-ui/react'
import React from 'react'

const Gallery = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(9%, 1fr))',
        gridTemplateRows: 'repeat(auto-fill, minmax(4%, 1fr))',
        gridGap: 16
      }}
    >
      <div
        style={{
          gridRow: 1,
          gridColumn: '1 / 3 ',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'stretch',
          overflow: 'hidden'
        }}
      >
        <Image
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
            objectFit: 'cover'
          }}
          src="/images/porsche/1.jpg"
          alt="porsche1"
        />
      </div>
      <div
        style={{
          gridRow: 1,
          gridColumn: '3 / 4',
          gridRowEnd: 3,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'stretch',
          overflow: 'hidden'
        }}
      >
        <Image
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
            objectFit: 'cover'
          }}
          src="/images/porsche/2.jpg"
          alt="porsche2"
        />
      </div>
      <div
        style={{
          gridRow: 1,
          gridColumn: '4 / 5',
          gridRowEnd: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'stretch',
          overflow: 'hidden'
        }}
      >
        <Image
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
            objectFit: 'cover'
          }}
          src="/images/porsche/3.jpg"
          alt="porsche3"
        />
      </div>
    </div>
  )
}

export default Gallery
