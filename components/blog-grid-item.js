import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const BlogGridItem = ({ children, id, title, thumbnail }) => {
  console.log(children)
  return (
    <Box textAlign="center">
      <NextLink href={`/blog/${id}`} scroll={false}>
        <LinkBox cursor="pointer">
          <Image
            src={thumbnail}
            alt={id}
            className="grid-item-thumbnail"
            placeholder="blur"
            blurDataURL="https://via.placeholder.com/150"
            width={240}
            height={140}
            objectFit="cover"
          />
          <LinkOverlay target={'_blank'}>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
            <Text fontSize={14}>{children}</Text>
          </LinkOverlay>
        </LinkBox>
      </NextLink>
    </Box>
  )
}

export const GridItemStyle = () => (
  <Global
    styles={`
        .grid-item-thumbnail {
          border-radius: 12px;
        }
      `}
  />
)
