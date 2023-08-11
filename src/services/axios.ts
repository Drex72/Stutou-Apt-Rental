import axios from 'axios'

export const baseURL = 'https://apartment-app-im27.onrender.com'

// Create a new Axios instance
const axiosInstance = axios.create({
  baseURL
})

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Get the access token from local storage
    const currentAccessToken = localStorage.getItem('accessToken')
    if (currentAccessToken) {
      config.headers.Authorization = `Bearer ${currentAccessToken}`
      return config
    } else {
      return config
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)


export default axiosInstance
