import { ListItem, Text } from '@chakra-ui/react'
import React from 'react'

const ProjectDetail = props => {
  const { title, content } = props
  return (
    <ListItem>
      <Text
        style={{
          fontWeight: 'bold',
          color: 'GrayText',
          letterSpacing: 8,
          textTransform: 'uppercase'
        }}
      >
        {title}
      </Text>
      <Text>{content}</Text>
    </ListItem>
  )
}

export default ProjectDetail
