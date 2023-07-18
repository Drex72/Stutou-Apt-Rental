import axiosInstance, { baseURL } from './axios'

class PostService {
  getAllPosts = async () => {
    return await axiosInstance.get(`${baseURL}/users/posts
    `)
  }
}

const postService = new PostService()
export default postService
