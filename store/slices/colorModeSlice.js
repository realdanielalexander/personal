import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: 'Cyberspace',
  background: '#181C18',
  text: '#C0F7E1',
  accent: '#9578D3'
}

export const colorModeSlice = createSlice({
  name: 'colorMode',
  initialState,
  reducers: {
    setColor: (state, action) => {
      return action.payload
    }
  }
})

export const { setColor } = colorModeSlice.actions
export default colorModeSlice.reducer
