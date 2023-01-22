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
  Divider
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setColor } from '../store/slices/colorModeSlice'

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

const colors = [
  {
    name: 'Cyberspace',
    background: '#181C18',
    text: '#C0F7E1',
    accent: '#9578D3'
  },
  {
    name: 'Terminal',
    background: '#191A1B',
    text: '#D2E9DF',
    accent: '#79A617'
  },
  {
    name: 'Paper',
    background: '#EEEEEE',
    text: '#444444',
    accent: ' #444444'
  },
  {
    name: 'Serika Dark',
    background: '#323437',
    text: '#D1D0C5',
    accent: '#E2B72C'
  }
]

const Navbar = props => {
  const { path } = props

  const color = useSelector(state => state.colorMode)
  const dispatch = useDispatch()

  const onClickHandler = color => {
    dispatch(setColor(color))
    window.localStorage.setItem('colorMode', JSON.stringify(color))
  }

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
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={4}>
          <Heading as="h1" size="lg" letterSpacing="tighter">
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          gap={4}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/blog" path={path}>
            Blog
          </LinkItem>
        </Stack>

        <Box flex={1} flexDirection={'row'} align="right">
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              ></MenuButton>
              <MenuList>
                <NextLink href="/blog" passHref>
                  <MenuItem as={Link}>Blog</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
          <Box ml={2} display={{ base: 'inline-block' }}>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                {color.name}
              </MenuButton>
              <MenuList>
                {colors.map(color => (
                  <MenuItem
                    key={color.name}
                    backgroundColor={color.background}
                    textColor={color.accent}
                    style={{
                      transition: 'all .5s ease',
                      WebkitTransition: 'all .5s ease',
                      MozTransition: 'all .5s ease'
                    }}
                    onClick={() => onClickHandler(color)}
                  >
                    {color.name}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
