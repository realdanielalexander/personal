import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon, StarIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <IconButton
      aria-label="Toggle theme"
      colorScheme={useColorModeValue('purple', 'orange', 'red')}
      icon={useColorModeValue(<MoonIcon />, <SunIcon />, <StarIcon />)}
      onClick={toggleColorMode}
    ></IconButton>
  )
}

export default ThemeToggleButton
