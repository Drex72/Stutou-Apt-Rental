/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export const messageSlice = createSlice({
  name: 'messages',
  initialState: {
    messageStatus: false
  },
  reducers: {
    toggleMessageStatus: (
      state,
      action: {
        payload: boolean
      }
    ) => {
      const { payload } = action
      state.messageStatus = payload
    }
  }
})

export const { toggleMessageStatus } = messageSlice.actions

export default messageSlice.reducer
