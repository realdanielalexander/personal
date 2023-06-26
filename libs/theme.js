import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { useSelector } from 'react-redux'

const styles = {
  global: props => ({
    body: {
      bg: mode('#FFFAF3', '#202023', '#323437')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        fontSize: '1.5rem',
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  },
  Image: {
    baseStyle: () => ({
      borderRadius: '12px'
    })
  }
}

const fonts = {
  heading: "'Roboto'"
}

const colors = {
  glassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts
})

export default theme
