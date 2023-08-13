import axiosInstance from './axios'
import { AdminRegister, ILogin } from '../interfaces/IAuthInterface'

class AdminService {
  login = async (data: ILogin) => {
    return await axiosInstance.post(`/admin/login`, data)
  }
  signUp = async (data: AdminRegister) => {
    return await axiosInstance.put(`/admin/signup`, data)
  }
  deleteUser = async (userId: string) => {
    return await axiosInstance.delete(`/admin/user/${userId}`)
  }
  verifyApartment = async (apartmentId: string) => {
    return await axiosInstance.put(`/apartment/${apartmentId}`)
  }
}

const adminService = new AdminService()
export default adminService
