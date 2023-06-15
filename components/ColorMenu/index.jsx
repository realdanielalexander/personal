import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setColor } from '../../store/slices/colorModeSlice'

const colors = [
  {
    name: 'Cyberspace',
    background: '#181C18',
    background_dark: '#131613',
    text: '#C0F7E1',
    text_inactive: '#47484A',
    accent: '#9578D3'
  },
  {
    name: 'Terminal',
    background: '#191A1B',
    background_dark: '#141516',
    text: '#D2E9DF',
    text_inactive: '#404142',
    accent: '#79A617'
  },
  {
    name: 'Paper',
    background: '#EEEEEE',
    background_dark: '#DDDDDD',
    text: '#444444',
    text_inactive: '#B2B2B2',
    accent: ' #444444'
  },
  {
    name: 'Serika Dark',
    background: '#323437',
    background_dark: '#2C2E31',
    text: '#D1D0C5',
    text_inactive: '#646669',
    accent: '#E2B72C'
  }
]

const ColorMenu = () => {
  const color = useSelector(state => state.colorMode)
  const dispatch = useDispatch()

  const onClickHandler = color => {
    dispatch(setColor(color))
    window.localStorage.setItem('colorMode', JSON.stringify(color))
  }
  return (
    <Box p={4} position={'absolute'}>
      <Box ml={2} display={{ base: 'inline-block' }}>
        <Menu>
          <MenuButton
            as={Button}
            color={color.accent}
            style={{
              WebkitTapHighlightColor: 'transparent',
              outlineColor: 'transparent'
            }}
            rightIcon={<ChevronDownIcon />}
          >
            {color.name}
          </MenuButton>
          <MenuList>
            {colors.map(color => (
              <MenuItem
                key={color.name}
                backgroundColor={color.background}
                textColor={color.accent}
                style={{
                  transition: 'all .5s ease',
                  WebkitTransition: 'all .5s ease',
                  MozTransition: 'all .5s ease'
                }}
                onClick={() => onClickHandler(color)}
              >
                {color.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
    </Box>
  )
}

export default ColorMenu
