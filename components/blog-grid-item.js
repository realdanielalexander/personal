import NextLink from 'next/link'
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  Heading,
  AspectRatio,
  Image
} from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { useSelector } from 'react-redux'

export const BlogGridItem = ({ children, id, title, thumbnail }) => {
  const color = useSelector(state => state.colorMode)
  return (
    <Box
      cursor="pointer"
      display="flex"
      flexDir={'column'}
      alignItems="start"
      justifyContent={'start'}
      boxShadow={'4px 4px 16px 0px rgba(0,0,0,0.19);'}
      borderRadius={8}
      p={8}
    >
      <NextLink href={`/blog/${id}`} scroll={false}>
        <Heading fontSize={'2rem'} textAlign="left">
          {title}
        </Heading>
      </NextLink>
      <Text mt={4} fontSize={'1.1rem'} textAlign="left">
        {children}
      </Text>
    </Box>
  )
}
