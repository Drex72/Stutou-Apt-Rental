/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '../interfaces/IAPIResponse'

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [] as IUser[]
  },
  reducers: {
    initializeUsers: (
      state,
      action: {
        payload: IUser[]
      }
    ) => {
      const { payload } = action
      state.users = payload
    }
  }
})

export const { initializeUsers } = usersSlice.actions

export default usersSlice.reducer
