/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

interface IinitialState {
  leftComponent: JSX.Element | null
  sidebarOpened: boolean,
  isMobile: boolean,
}

export const layoutSlice = createSlice({
  name: 'theme',
  initialState: {
    leftComponent: null,
    sidebarOpened: false,
    isMobile: false
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
    },
    toggleSideBar: (state, { payload }: { payload: boolean }) => {
      state.sidebarOpened = payload
    },
    toggleMobileState: (state, { payload }: { payload: boolean }) => {
      state.isMobile = payload
    }
  }
})

export const { setLeftComponent,toggleSideBar,toggleMobileState } = layoutSlice.actions

export default layoutSlice.reducer
