import { ISendChat } from '../interfaces/IChat'
import axiosInstance from './axios'

class MessageService {
  getAllMessages = async () => {
    return await axiosInstance.get(`/chats`)
  }
  getSentMessages = async () => {
    return await axiosInstance.get(`/chats/sent`)
  }
  getReceivedMessages = async () => {
    return await axiosInstance.get(`/chats/received`)
  }
  sendMessage = async (data: { receiverId: string; chat: ISendChat }) => {
    return await axiosInstance.put(`/chat/${data.receiverId}`, data.chat)
  }
}

const messageService = new MessageService()
export default messageService
