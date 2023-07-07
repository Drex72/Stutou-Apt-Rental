export interface IBasicUserInterface {
  firstName: string;
  lastName: string;
  otherName: string;
  email: string;
}

export interface IUserInformation extends IBasicUserInterface {
  id: string | number;
}

export interface IAuthenticationResponse {
  message: string;
  data: {
    token: {
      accessToken: string;
      refreshToken: string;
    };
    admin: IUserInformation;
  };
}
