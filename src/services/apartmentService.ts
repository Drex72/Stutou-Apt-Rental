import axiosInstance, { baseURL } from './axios'

class ApartmentService {
  createApartment = async (data: FormData) => {
    return await axiosInstance.post(`/owner/apartment`, data)
  }
  getAllApartments = async () => {
    return await axiosInstance.get(`/owner/apartments`)
  }
  getAnApartment = async (apartmentId: string) => {
    return await axiosInstance.post(`${baseURL}/owner/apartment/${apartmentId}`)
  }
  getPostCodes = async () => {
    return await axiosInstance.get(`${baseURL}/admin/postcodes`)
  }
  //   updateAnApartment = async (data: IForgotPassword) => {
  //     return await axios.post(`${baseURL}/student/resetpassword`, data)
  //   }
}

const apartmentService = new ApartmentService()
export default apartmentService
