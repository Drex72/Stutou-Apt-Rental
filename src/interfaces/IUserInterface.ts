export interface IBasicUserInterface {
  firstName: string;
  lastName: string;
  otherName: string;
  email: string;
}

export interface IUserInformation extends IBasicUserInterface {
  id: string | number;
  avatar:string

}

export interface IAuthenticationResponse {
  message: string;
  data: {
    token: {
      accessToken: string;
      refreshToken: string;
    };
    user: IUserInformation;
  };
}
