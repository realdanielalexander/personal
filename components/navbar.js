import Logo from './logo'
import NextLink from 'next/link'
import ThemeToggleButton from './theme-toggle-button'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  keyframes,
  useColorModeValue,
  Button,
  useColorMode,
  Divider,
  useDisclosure
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setColor } from '../store/slices/colorModeSlice'
import DesktopMenu from './DesktopMenu'
import { useRouter } from 'next/router'

const blink = keyframes`
  50% {
    // Animation
    // color: transparent;
  }
`

const Caret = styled.span`
  color: white;
  // Animation
  // animation: ${blink} 1s steps(1) infinite;
  // animation-timing-function: ease-in-out;
`

const CaretInvisible = styled.span`
  color: transparent;
`

const LinkItem = ({ href, path, children }) => {
  const active = path.includes(href)
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha')
  return (
    <Box>
      {active ? <Caret>&gt;</Caret> : <CaretInvisible>&gt;</CaretInvisible>}
      <NextLink href={href}>
        <Link p={2} color={inactiveColor} borderRadius="md">
          {children}
          <span id=""></span>
        </Link>
      </NextLink>
    </Box>
  )
}

const Navbar = props => {
  const { path } = props

  const { isOpen, onToggle, onClose } = useDisclosure()
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    const colorMode = window.localStorage.getItem('colorMode')
    if (colorMode) {
      dispatch(setColor(JSON.parse(colorMode)))
    }
  }, [dispatch])

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <DesktopMenu isOpen={isOpen} onClose={onClose} />
      <Container
        display="flex"
        maxW="100%"
        px={16}
        py={4}
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={4}>
          <Heading as="h1" size="lg" letterSpacing="tighter">
            <Logo />
          </Heading>
        </Flex>
        <Box flex={1} flexDirection={'row'} align="right">
          <Button
            border={0}
            outline={0}
            variant="link"
            zIndex={9999}
            mt={2}
            onClick={onToggle}
          >
            {isOpen ? 'Close' : 'Menu'}
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
