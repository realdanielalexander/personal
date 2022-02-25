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
  useColorModeValue
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { HamburgerIcon } from '@chakra-ui/icons'

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`

const Caret = styled.span`
  border-left: 0.6em solid white;
  animation: ${blink} 1s steps(1) infinite;
  animation-timing-function: ease-in-out;
`

const CaretInvisible = styled.span`
  border-left: 0.6em solid transparent;
`

const LinkItem = ({ href, path, children }) => {
  const active = path.includes(href)
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha')
  return (
    <Box>
      {active ? <Caret /> : <CaretInvisible />}
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

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
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
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/blog" path={path}>
            Blog
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />
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
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
