/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { BasicUser, IUserType } from '../interfaces/IAuthInterface'
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
    userInfo: initialStateValue,
    userType: 'user' as IUserType
  },
  reducers: {
    login: (
      state,
      action: {
        payload: {
          response: ILoginAPIResponse
          userType: IUserType
        }
      }
    ) => {
      const { response, userType } = action.payload
      const { token, userId } = response

      localStorage.setItem('accessToken', token)
      state.userInfo = { ...state.userInfo, id: userId }
      state.userType = userType
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
      state.userType = 'user'
    }
  }
})

export const { login, getUserDetails, logout } = authenticationSlice.actions

export default authenticationSlice.reducer
