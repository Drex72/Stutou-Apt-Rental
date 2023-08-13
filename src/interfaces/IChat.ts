export interface IChat {
  _id: string
  name: string
  email: string
  message: string
  senderId: string
  receiverId: string
  createdAt: any
  updatedAt: string
}

export interface ISendChat {
  name: string
  email: string
  message: string
}
