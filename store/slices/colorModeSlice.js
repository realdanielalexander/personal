import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: 'light',
  background: '#FFFFFF40'
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
