import React from 'react'
import Section from './section'
import { Text } from '@chakra-ui/react'

const Copyright = () => {
  return (
    <Section paddingY={8} display="flex" flexDirection="column" margin={0}>
      <Text textAlign={'center'} margin={0}>
        &copy; 2025 Daniel Alexander | Last updated November 2025<br />
        <Text fontSize={'sm'} color={'gray.500'}>
          Built with Next.js, Chakra UI, and React. Hosted on Vercel.
        </Text> 
        <Text fontSize={'sm'} color={'gray.500'}>Color schemes inspired by monkeytype.com</Text>
        
      </Text>
    </Section>
  )
}

export default Copyright
