import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const colorMode = useSelector(state => state.colorMode)
  return (
    <Link href="/">
      <a>
        <Text
          color={colorMode.accent}
          fontFamily="M PLUS Rounded 1c"
          fontWeight="bold"
        >
          daniel alexander
        </Text>
      </a>
    </Link>
  )
}

export default Logo
