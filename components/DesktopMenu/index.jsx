import { Box, List, ListItem, Text, useDisclosure } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ColorMenu from '../ColorMenu'
import AnimatedBox from './AnimatedBox'

const DesktopMenu = ({ isOpen, onClose }) => {
  const colorMode = useSelector(state => state.colorMode)
  const router = useRouter()

  useEffect(() => {
    onClose()
  }, [router.asPath, onClose])

  const listVariants = {
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -100
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.15
      }
    },
    exit: {
      opacity: 0,
      x: -100
    }
  }
  return (
    <AnimatePresence>
      {isOpen && (
        <AnimatedBox
          w="100vw"
          h="100vh"
          overflow={'hidden'}
          zIndex={1}
          position={'fixed'}
        >
          <Box flex={1} flexDirection={'row'} align="right">
            <ColorMenu />
          </Box>
          <List
            as={motion.div}
            display={'flex'}
            h="100%"
            flexDir="column"
            justifyContent={'center'}
            alignItems={'center'}
            fontSize="4rem"
            color={colorMode.text}
            background={'linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.35))'}
            fontWeight="bold"
            variants={listVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <ListItem as={motion.div} variants={itemVariants}>
              <NextLink href="/" onClick={() => onClose()}>
                About Me
              </NextLink>
            </ListItem>
            <ListItem as={motion.div} variants={itemVariants}>
              <NextLink href="/blog">Posts</NextLink>
            </ListItem>
            <ListItem as={motion.div} variants={itemVariants}>
              <NextLink href="/">Prints</NextLink>
            </ListItem>
            <ListItem as={motion.div} variants={itemVariants}>
              <NextLink href="/">Projects</NextLink>
            </ListItem>
          </List>
        </AnimatedBox>
      )}
    </AnimatePresence>
  )
}

export default DesktopMenu
