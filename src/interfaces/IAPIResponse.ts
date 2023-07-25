interface IAPIResponse {}

interface ILoginAPIResponse {
  token: string
  userId: string
}

interface IRegisterAPIResponse {
  message: string
}

interface IApartment {}
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
interface IGetStudentsAPIResponse {
  message: string
  data: IStudent[]
}
interface IGetStudentAPIResponse {
  message: string
  data: IStudent
}

interface IGetOwnersAPIResponse {
  message: string
  data: IOwner[]
}

interface IGetOwnerAPIResponse {
  message: string
  data: IOwner
}
