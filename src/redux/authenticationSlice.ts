/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import accessToken from "../utils/accessToken/AccessToken";
import {
  IAuthenticationResponse,
  IUserInformation,
} from "../interfaces/IUserInterface";

const initialStateValue: IUserInformation = {
  id: "",
  firstName: "",
  lastName: "",
  otherName: "",
  email: "",
};

export const authenticationSlice = createSlice({
  name: "admin",
  initialState: {
    value: initialStateValue,
    userloggedIn: false,
    adminRememberMe: false,
  },
  reducers: {
    login: (
      state,
      action: {
        payload: { response: IAuthenticationResponse; rememberMe: boolean };
      }
    ) => {
      const { token, admin } = action.payload.response.data;

      state.userloggedIn = true;
      state.adminRememberMe = action.payload.rememberMe;

      if (action.payload.rememberMe) {
        // Stores Refresh Token in Local Storage
        localStorage.setItem("refreshToken", token.refreshToken);
      } else {
        sessionStorage.setItem("refreshToken", token.refreshToken);
      }

      // Stores Access Token In Memory with a Setter
      accessToken.setAccessToken(token.accessToken);
      state.value = admin;
    },

    logout: (state) => {
      state.userloggedIn = false;
      state.adminRememberMe = false;

      state.value = initialStateValue;

      // Removes Refresh Token in Local Storage
      localStorage.removeItem("refreshToken");

      // Resets Access Token
      accessToken.resetAccessToken();
    },
  },
});

export const { login, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
