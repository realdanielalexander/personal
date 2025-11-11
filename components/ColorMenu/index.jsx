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
    name: 'Paper',
    background: '#FFFFFF',
    background_dark: '#AAAAAA',
    text: '#444444',
    text_inactive: '#B2B2B2',
    accent: '#444444',
    text_highlight: '#2E8093'
  },
  {
    name: 'Cyberspace',
    background: '#181C18',
    background_dark: '#131613',
    text: '#C0F7E1',
    text_inactive: '#47484A',
    accent: '#9578D3',
    text_highlight: '#FF6B9D'
  },
  {
    name: 'Terminal',
    background: '#191A1B',
    background_dark: '#141516',
    text: '#D2E9DF',
    text_inactive: '#404142',
    accent: '#79A617',
    text_highlight: '#B8E994'
  },
  {
    name: 'Monokai',
    background: '#272822',
    background_dark: '#1F201B',
    text: '#E6DA74',
    text_inactive: '#608C55',
    accent: '#E2E2DC',
    text_highlight: '#F8F8F2'
  },
  {
    name: 'Serika Dark',
    background: '#323437',
    background_dark: '#2C2E31',
    text: '#D1D0C5',
    text_inactive: '#646669',
    accent: '#E2B72C',
    text_highlight: '#FFD93D'
  },
  {
    name: 'Solarized Dark',
    background: '#002B36',
    background_dark: '#001F28',
    text: '#839496',
    text_inactive: '#586E75',
    accent: '#B58900',
    text_highlight: '#FDF6E3'
  },
  {
    name: 'Dracula',
    background: '#282A36',
    background_dark: '#21222C',
    text: '#F8F8F2',
    text_inactive: '#6272A4',
    accent: '#FF79C6',
    text_highlight: '#50FA7B'
  },
  {
    name: 'Nord',
    background: '#2E3440',
    background_dark: '#242831',
    text: '#D8DEE9',
    text_inactive: '#4C566A',
    accent: '#88C0D0',
    text_highlight: '#A3BE8C'
  },
  {
    name: 'One Dark Pro',
    background: '#282C34',
    background_dark: '#21252B',
    text: '#ABB2BF',
    text_inactive: '#5C6370',
    accent: '#C678DD',
    text_highlight: '#E5C07B'
  },
  {
    name: 'Material Dark',
    background: '#263238',
    background_dark: '#1E272C',
    text: '#ECEFF1',
    text_inactive: '#546E7A',
    accent: '#FF5722',
    text_highlight: '#00BCD4'
  },
  {
    name: 'Tokyo Night',
    background: '#1A1B26',
    background_dark: '#16161E',
    text: '#C0CAF5',
    text_inactive: '#565F89',
    accent: '#7AA2F7',
    text_highlight: '#9ECE6A'
  },
  {
    name: 'Gruvbox Dark',
    background: '#282828',
    background_dark: '#1D2021',
    text: '#EBDBB2',
    text_inactive: '#928374',
    accent: '#FE8019',
    text_highlight: '#FB4934'
  },
  {
    name: 'Catppuccin Mocha',
    background: '#1E1E2E',
    background_dark: '#181825',
    text: '#CDD6F4',
    text_inactive: '#6C7086',
    accent: '#F5C2E7',
    text_highlight: '#A6E3A1'
  },
  {
    name: 'Everforest Dark',
    background: '#2D353B',
    background_dark: '#232A2E',
    text: '#D3C6AA',
    text_inactive: '#7A8478',
    accent: '#A7C080',
    text_highlight: '#DBBC7F'
  },
  {
    name: 'Ayu Dark',
    background: '#0F1419',
    background_dark: '#0A0E14',
    text: '#E6E1CF',
    text_inactive: '#5C6773',
    accent: '#FFB454',
    text_highlight: '#39BAE6'
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
    <Box display={{ base: 'inline-block' }}>
      <Menu>
        <MenuButton
          as={Button}
          color={color.accent}
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
  )
}

export default ColorMenu
