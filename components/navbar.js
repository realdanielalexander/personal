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
import ColorMenu from './ColorMenu'
import ColorMenuLite from './ColorMenuLite'

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
      <NextLink href={href}>
        <Link
          color={inactiveColor}
          borderRadius="md"
          textDecor={active && 'underline'}
        >
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
    <Box as="nav" w="100%" py={8} zIndex={1} {...props}>
      <Container display="flex" maxW="container.md" alignItems="space-between">
        <Heading as="h1" size="lg" letterSpacing="tighter">
          <Logo />
        </Heading>
        <Box flex={1}>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            justifyContent="end"
            flexGrow={1}
            gap={4}
            mt={{ base: 4, nmd: 0 }}
          >
            <LinkItem href="/writings" path={path}>
              writings
            </LinkItem>
            <LinkItem href="/gallery" path={path}>
              gallery
            </LinkItem>

            <ColorMenu />
          </Stack>

          <Box
            ml={2}
            display={{ base: 'flex', md: 'none' }}
            gap={4}
            justifyContent={'end'}
          >
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              ></MenuButton>
              <MenuList>
                <NextLink href="/blog" passHref>
                  <MenuItem as={Link}>writings</MenuItem>
                </NextLink>
                <NextLink href="/gallery" passHref>
                  <MenuItem as={Link}>gallery</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>

            <ColorMenu />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
