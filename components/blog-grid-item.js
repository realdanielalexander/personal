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
    <Box>
      <Image src={thumbnail} alt={id} placeholder="blur" objectFit="cover" />
      <Box
        cursor="pointer"
        display="flex"
        flexDir={'column'}
        alignItems="start"
        justifyContent={'start'}
        background={color.background_dark}
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
    </Box>
  )
}
