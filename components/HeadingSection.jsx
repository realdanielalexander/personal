import { Box } from '@chakra-ui/react'
import { chakra, shouldForwardProp } from '@chakra-ui/react'
import React from 'react'

const BoxStyle = chakra(Box, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})
const StyledBox = ({ children, ...props }) => {
  return (
    <Box m="0" {...props}>
      {children}
    </Box>
  )
}

export default StyledBox
