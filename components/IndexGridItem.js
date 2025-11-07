import { Box, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const IndexGridItem = ({ 
  width, 
  flex, 
  heading, 
  description, 
  href, 
  children, 
  headingFontSize = "16px",
  headingLetterSpacing = "4px",
  descriptionFontSize = "24px",
  showHeading = true,
  showDescription = true
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
      justifyContent="center" 
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
      {showHeading && heading && (
        <Text 
          color={color.accent} 
          fontSize={headingFontSize} 
          mb={3} 
          textTransform="uppercase" 
          letterSpacing={headingLetterSpacing}
          position="absolute" 
          top={8} 
          left={8}
        >
          {heading}
        </Text>
      )}
      {showDescription && description && (
        <Text color={color.text} fontSize={descriptionFontSize}>
          {description}
        </Text>
      )}
      {children}
    </Box>
  )

  if (href) {
    return <Link href={href}>{itemContent}</Link>
  }

  return itemContent
}

export default IndexGridItem 