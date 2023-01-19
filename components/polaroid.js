import { Box, Image } from '@chakra-ui/react'
import { render } from 'react-dom'
import React, { useState } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import styled from '@emotion/styled'

const photos = [
  {
    src: 'studying-abroad.jpg',
    caption: 'Coffee with a view of Brooklyn Bridge, New York City '
  }
]

const PolaroidCaption = styled.p`
  font-family: Caveat;

  color: black;
  font-size: 1.5em;
  text-align: center;
  text-indent: 0;
  margin-top: 8px;
`

const Polaroid = ({}) => {
  return (
    <Box
      w="100%"
      backgroundColor="#FFF"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      willChange="transform"
      border="1em solid #FFF"
      borderBottom="2em solid #FFF"
      borderRadius="3px"
    >
      <Image src="/images/brooklyn-bridge.jpg" w="320px" />
      <PolaroidCaption>{}</PolaroidCaption>
    </Box>
  )
}

const PolaroidDeck = () => {
  return (
    <Box
      position="relative"
      w="320px"
      marginTop="16px"
      display="flex"
      alignItems="center"
      justify-content="center"
    >
      <Polaroid />
    </Box>

    // Outer div if you wish to use
    // <Box position="fixed" overflow="hidden" w="100%" h="100%">
    //   <Polaroid />
    // </Box>
  )
}
export default PolaroidDeck
