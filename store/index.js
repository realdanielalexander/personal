import { configureStore } from '@reduxjs/toolkit'
import colorModeReducer from './slices/colorModeSlice'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { createWrapper } from 'next-redux-wrapper'

const store = () =>
  configureStore({
    reducer: {
      colorMode: colorModeReducer
    },
    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware().concat()
    }
  })

export default createWrapper(store)
