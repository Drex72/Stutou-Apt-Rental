import axios from 'axios'
import axiosInstance, { baseURL } from './axios'
import {
  IForgotPassword,
  ILogin,
  IResetPassword,
  IStudentRegister,
  IVerifyUser
} from '../interfaces/IAuthInterface'

class AuthenticationService {
  login = async (data: ILogin) => {
    return await axios.post(`${baseURL}/users/auth/login`, data)
  }
  studentSignUp = async (data: IStudentRegister) => {
    return await axios.post(`${baseURL}/users/auth/login`, data)
  }
  verifyUser = async (data: IVerifyUser) => {
    return await axios.post(`${baseURL}/users/auth/verify-user`, data)
  }
  forgotPassword = async (data: IForgotPassword) => {
    return await axios.post(`${baseURL}/users/auth/forgot-password`, data)
  }
  resetPassword = async (data: IResetPassword) => {
    return await axios.post(`${baseURL}/users/auth/reset-password`, data)
  }
  resendVerificationMail = async (userAccessToken: string) => {
    return await axios.get(
      `${baseURL}/users/auth/resend-verification${userAccessToken}`
    )
  }
  logout = async (userAccessToken: string) => {
    return await axiosInstance.delete(
      `${baseURL}/users/auth/logout?token=${userAccessToken}`
    )
  }
}

const authService = new AuthenticationService()
export default authService
