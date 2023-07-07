export interface ILogin {
  email: string
  password: string
}

interface UserRegister extends ILogin {
  firstName: string
  lastName: string
}

export interface IStudentRegister extends UserRegister {

}

export interface IHouseOwnerRegister extends UserRegister {
  
}

export interface IVerifyUser {
  token: string
  password: string
}

export interface IResetPassword {
  resetToken: string
  password: string
}

export interface IForgotPassword {
  email: string
}
