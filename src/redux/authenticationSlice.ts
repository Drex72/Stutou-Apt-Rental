/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { BasicUser } from '../interfaces/IAuthInterface'
import { IUser, ILoginAPIResponse } from '../interfaces/IAPIResponse'

const initialStateValue: BasicUser = {
  id: '',
  firstname: '',
  lastname: '',
  email: '',
  status: 'student'
}

export const authenticationSlice = createSlice({
  name: 'auth',
  initialState: {
    userInfo: initialStateValue
  },
  reducers: {
    login: (
      state,
      action: {
        payload: ILoginAPIResponse
      }
    ) => {
      const { token, userId } = action.payload
      localStorage.setItem('accessToken', token)
      state.userInfo = { ...state.userInfo, id: userId }
    },

    getUserDetails: (
      state,
      action: {
        payload: IUser
      }
    ) => {
      const { _id, email, firstname, lastname, status } = action.payload

      state.userInfo = {
        id: _id,
        email,
        firstname,
        lastname,
        status
      }
    },

    logout: (state) => {
      localStorage.removeItem('accessToken')
      state.userInfo = initialStateValue
    }
  }
})

export const { login, getUserDetails, logout } =
  authenticationSlice.actions

export default authenticationSlice.reducer
