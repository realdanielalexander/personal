import { motion } from 'framer-motion'
import Head from 'next/head'
import { Box, IconButton } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 }
}

const GridLayout = ({ children, title, gridItems, displayExitButton = true, padding = 4 }) => {
  const color = useSelector(state => state.colorMode)
  const router = useRouter()
  
  const handleExit = () => {
    router.push('/')
  }
  
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}
    >
      <>
        {title && (
          <Head>
            <title>{title} - Daniel Alexander</title>
          </Head>
        )}
        <Box minH="100vh" margin={4}>
          <Box maxW="1400px" mx="auto">
            {/* Responsive Grid Container */}
            <Box 
              display="flex" 
              gap={6} 
              flexWrap="wrap"
              w="100%"
              border="2px solid"
              borderColor="gray.300"
              py={{ base: 4, md: 8, lg: 0, xl: 0 }}
              px={{ base: 4, md: 8, lg: 36, xl: 40 }}
              borderRadius="5xl"
            >
              {/* Circular Exit Button */}
              {displayExitButton && <Box
                zIndex={1000}
                mt={16}
                position="relative"
                display="flex"
                flexDirection="column"
                width="100%"
                alignItems="center"
                mb={16}
              >
                <IconButton
                  aria-label="Exit to home"
                  icon={<CloseIcon />}
                  onClick={handleExit}
                  bg={color.background}
                  color={color.accent}
                  border="2px solid"
                  borderColor={color.accent}
                  borderRadius="full"
                  size="lg"
                  _hover={{
                    bg: color.accent,
                    color: color.background
                  }}
                  _active={{
                    bg: color.accent,
                    color: color.background
                  }}
                  transition="all 0.2s"
                />
                </Box>}
              {gridItems}
            </Box>
          </Box>
        </Box>
      </>
    </motion.article>
  )
}

export default GridLayout 