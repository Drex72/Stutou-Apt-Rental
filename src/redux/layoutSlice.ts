/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

interface IinitialState {
  leftComponent: JSX.Element | null
}

export const layoutSlice = createSlice({
  name: 'theme',
  initialState: {
    leftComponent: null
  } as IinitialState,
  reducers: {
    setLeftComponent: (
      state,
      action: {
        payload: JSX.Element
      }
    ) => {
      const { payload } = action
      state.leftComponent = payload
    }
  }
})

export const { setLeftComponent } = layoutSlice.actions

export default layoutSlice.reducer
