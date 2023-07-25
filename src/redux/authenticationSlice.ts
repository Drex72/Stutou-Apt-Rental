/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { BasicUser } from '../interfaces/IAuthInterface'

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
    userloggedIn: false,
    userToken: '' as string
  },
  reducers: {
    login: (
      state,
      action: {
        payload: ILoginAPIResponse
      }
    ) => {
      const { token, userId } = action.payload
      state.userToken = token
      state.userInfo = { ...state.userInfo, id: userId }
    },

    getUserDetails: (
      state,
      action: {
        payload: IGetStudentAPIResponse
      }
    ) => {
      const { _id, email, firstname, lastname, status } = action.payload.data

      state.userInfo = {
        id: _id,
        email,
        firstname,
        lastname,
        status
      }
    }
  }
})

export const { login, getUserDetails } = authenticationSlice.actions

export default authenticationSlice.reducer
