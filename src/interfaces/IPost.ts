import { IUserInformation } from './IUserInterface'

export interface IPost {
  id: string
  img: string | null
  desc: string
  userInfo: IUserInformation
  likes: number
}

export interface IGetPostResponse {
  message: String
  data: IPost[]
}
