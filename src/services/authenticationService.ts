import axios from 'axios'
import axiosInstance, { baseURL } from './axios'
import { IForgotPassword, ILogin, UserRegister } from '../interfaces/IAuthInterface'

class AuthenticationService {
  login = async (data: ILogin) => {
    return await axiosInstance.post(`/user/login`, data)
  }
  getUserInfo = async (userId: string) => {
    return await axiosInstance.get(`/user/${userId}`)
  }
  studentSignUp = async (data: UserRegister) => {
    return await axios.put(`${baseURL}/user/signup`, data)
  }
  forgotPassword = async (data: IForgotPassword) => {
    return await axios.post(`${baseURL}/student/resetpassword`, data);
  };
}

const authService = new AuthenticationService()
export default authService
