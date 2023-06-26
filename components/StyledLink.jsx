import { Link } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

const StyledLink = ({ children, ...props }) => {
  const colorMode = useSelector(state => state.colorMode)
  return (
    <Link color={colorMode.accent} textUnderlineOffset={4} {...props}>
      {children}
    </Link>
  )
}

export default StyledLink
