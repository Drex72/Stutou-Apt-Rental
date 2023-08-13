export interface IAPIResponse<T> {
  message: string
  data: T
}

export interface ILoginAPIResponse {
  token: string
  userId: string
}

export interface IRegisterAPIResponse {
  message: string
}

export interface IApartment {
  _id: string
  image: string
  name: string
  description: string
  location: string
  postCode: string
  rooms: number
  categories: string[]
  lowestPrice: number
  highestPrice: number
  owner: string
  comments: string[]
  isVerified?: boolean
}


export type Status = 'owner' | 'student'

export interface IUser {
  _id: string
  firstname: string
  lastname: string
  email: string
  status: Status
  reported: number
  activated: boolean
  apartments: string[]
}
// export interface IGetStudentsAPIResponse extends IAPIResponse {
//   data: IStudent[]
// }
// export interface IGetStudentAPIResponse extends IAPIResponse {
//   data: IStudent
// }
// export interface IGetMessagesAIResponse<T> extends IAPIResponse {
//   data: T
// }

// export interface IGetOwnersAPIResponse extends IAPIResponse {
//   data: IOwner[]
// }

// export interface IGetOwnerAPIResponse extends IAPIResponse {
//   data: IOwner
// }

// export interface IGetAllApartmentAPIResponse extends IAPIResponse {
//   data: IApartment[]
// }
// export interface IGetApartmentAPIResponse extends IAPIResponse {
//   data: IApartment
// }
