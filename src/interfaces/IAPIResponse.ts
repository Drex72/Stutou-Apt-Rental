interface IAPIResponse {
  message: string
}

interface ILoginAPIResponse {
  token: string
  userId: string
}

interface IRegisterAPIResponse {
  message: string
}

interface IApartment {
  _id: string
  image: string
  name: string
  description: string
  location: string
  rooms: number
  categories: string[]
  lowestPrice: number
  highestPrice: number
  owner: string
  comments: string[]
  isVerified?: boolean
}

interface IStudent {
  _id: string
  firstname: string
  lastname: string
  email: string
  status: 'student'
  token?: string
}

interface IOwner {
  _id: string
  firstname: string
  lastname: string
  email: string
  password: string
  status: 'owner'
  token: string
  address: string
  apartments: IApartment[]
}
interface IGetStudentsAPIResponse extends IAPIResponse {
  data: IStudent[]
}
interface IGetStudentAPIResponse extends IAPIResponse {
  data: IStudent
}

interface IGetOwnersAPIResponse extends IAPIResponse {
  data: IOwner[]
}

interface IGetOwnerAPIResponse extends IAPIResponse {
  data: IOwner
}

interface IGetAllApartmentAPIResponse extends IAPIResponse {
  data: IApartment[]
}
interface IGetApartmentAPIResponse extends IAPIResponse {
  data: IApartment
}
