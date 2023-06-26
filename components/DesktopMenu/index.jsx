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
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -200
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.15,
        ease: [0.17, 0.67, 0.83, 0.67]
      }
    },
    exit: {
      opacity: 0,
      x: 0
    }
  }

  const paths = [
    {
      href: '/',
      label: 'About Me'
    },
    {
      href: '/blog',
      label: 'Posts'
    }
  ]

  const color = useSelector(state => state.colorMode)

  return (
    <AnimatePresence>
      {isOpen && (
        <AnimatedBox
          w="100vw"
          h="100vh"
          overflow={'hidden'}
          background={color.background}
          color={colorMode.text}
          zIndex={'999'}
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
            fontWeight="bold"
            variants={listVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            {paths.map((path, index) => (
              <ListItem
                key={path.href}
                style={{
                  transition: 'color .5s ease',
                  WebkitTransition: 'color .5s ease',
                  MozTransition: 'color .5s ease'
                }}
                _hover={{
                  color: color.accent
                }}
                color={
                  router.asPath === path.href ? color.text : color.text_inactive
                }
                as={motion.div}
                variants={{
                  ...itemVariants,
                  exit: {
                    ...itemVariants.exit,
                    transition: {
                      delay: index * 1
                    }
                  }
                }}
              >
                <NextLink href={path.href} onClick={() => onClose()}>
                  {path.label}
                </NextLink>
              </ListItem>
            ))}
          </List>
        </AnimatedBox>
      )}
    </AnimatePresence>
  )
}

export default DesktopMenu
