import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledBox = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const AnimatedBox = ({ children, delay = 0, ...props }) => (
  <StyledBox
    style={{
      transition: 'background .5s ease; color .5s ease',
      WebkitTransition: 'background .5s ease; color .5s ease',
      MozTransition: 'background .5s ease; color .5s ease'
    }}
    initial={{ y: -1000 }}
    animate={{ y: 0 }}
    exit={{ y: 1000 }}
    transition={{ duration: 0.8, delayChildren: 3 }}
    backdropFilter="blur(10px)"
    {...props}
  >
    {children}
  </StyledBox>
)

export default AnimatedBox
