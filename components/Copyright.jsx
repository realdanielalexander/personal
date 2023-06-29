import React from 'react'
import Section from './section'
import { Text } from '@chakra-ui/react'

const Copyright = () => {
  return (
    <Section paddingY={8} display="flex" flexDirection="column" margin={0}>
      <Text textAlign={'center'} margin={0}>
        &copy; 2023 Daniel Alexander | Last updated on Jun 26, 2023
      </Text>
    </Section>
  )
}

export default Copyright
