import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledBox = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const AnimatedBox = ({ children, delay = 0, ...props }) => (
  <StyledBox
    initial={{ y: -500, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -500, opacity: 0 }}
    transition={{ duration: 0.8, delay, delayChildren: 2 }}
    backdropFilter="blur(10px)"
    {...props}
  >
    {children}
  </StyledBox>
)

export default AnimatedBox
