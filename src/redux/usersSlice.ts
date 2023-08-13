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
    },
    deleteUser: (
      state,
      action: {
        payload: string
      }
    ) => {
      state.users = state.users.filter((user) => user._id !== action.payload)
    }
  }
})

export const { initializeUsers, deleteUser } = usersSlice.actions

export default usersSlice.reducer
