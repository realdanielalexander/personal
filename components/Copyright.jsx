import React from 'react'
import Section from './section'
import { Text } from '@chakra-ui/react'

const Copyright = () => {
  return (
    <Section paddingY={8} display="flex" flexDirection="column" margin={0}>
      <Text textAlign={'center'} margin={0}>
        &copy; 2024 Daniel Alexander | Last updated October 2024
      </Text>
    </Section>
  )
}

export default Copyright
