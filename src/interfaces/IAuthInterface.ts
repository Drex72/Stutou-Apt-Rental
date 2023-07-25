export interface ILogin {
  email: string
  password: string
}

export interface BasicUser extends Omit<ILogin, 'password'> {
  id:string
  firstname: string
  lastname: string
  status: 'owner' | 'student'

}

export interface UserRegister extends ILogin {
  firstname: string
  lastname: string
  status: 'owner' | 'student'
}


export interface IForgotPassword {
  email: string;
}
