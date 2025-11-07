import { Box, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const GridItem = ({ 
  width, 
  flex, 
  href, 
  children
}) => {
  const color = useSelector(state => state.colorMode)
  
  const itemContent = (
    <Box 
      bg={color.background} 
      px={8} 
      py={8}
      borderRadius="5xl" 
      display="flex" 
      flexDirection="column"
      alignItems="flex-start" 
      justifyContent="flex-start" 
      minH="240px" 
      w={width}
      flex={flex}
      fontFamily="Roboto"
      position="relative"
      sx={{
        '@media (min-width: 1200px)': {
          width: width.lg || width,
          flex: flex.lg || flex
        }
      }}
    >
      {children}
    </Box>
  )

  if (href) {
    return <Link href={href}>{itemContent}</Link>
  }

  return itemContent
}

export default GridItem 