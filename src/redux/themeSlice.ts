/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
type ITheme = 'light' | 'dark'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'light' as ITheme
  },
  reducers: {
    toggleTheme: (
      state,
      action: {
        payload: ITheme
      }
    ) => {
      const { payload } = action
      state.theme = payload
    }
  }
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
