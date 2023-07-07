import axios from "axios";
import accessToken from "../utils/accessToken/AccessToken";
import { AllRouteConstants } from "../router/RouteConstants";

export const baseURL = "";

// Create a new Axios instance
const axiosInstance = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Get the access token from local storage
    const currentAccessToken = accessToken.getAccessToken();
    if (currentAccessToken) {
      // Check if the access token has expired
      const { exp } = JSON.parse(atob(currentAccessToken.split(".")[1]));
      if (Date.now() >= exp * 1000) {
        // If the access token has expired, refresh it
        return refreshToken().then((newAccessToken) => {
          // Update the authorization header with the new token
          config.headers.Authorization = `Bearer ${newAccessToken}`;
          return config;
        });
      } else {
        // If the access token hasn't expired, add it to the authorization header
        config.headers.Authorization = `Bearer ${currentAccessToken}`;
        return config;
      }
    } else {
      // If there's no access token, just return the original config
      return config;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // If the API returns a 401 Unauthorized response, refresh the access token and retry the request
    if (error.response && error.response.status === 401) {
      return refreshToken().then((newAccessToken) => {
        console.log(newAccessToken);
        // Update the authorization header with the new token
        error.config.headers.Authorization = `Bearer ${newAccessToken}`;
        // Retry the original request
        return axiosInstance.request(error.config);
      })
      // If there was an error refreshing the access token, navigate to the login page
      .catch((error) => {
        window.history.pushState(null, "", AllRouteConstants.auth.login);
        window.location.replace(AllRouteConstants.auth.login);
      });
    } else {
      return Promise.reject(error);
    }
  }
);

// Function to refresh the access token
function refreshToken() {
  const refreshToken =
    localStorage.getItem("refreshToken") ||
    sessionStorage.getItem("refreshToken");

  // Make a request to the token refresh endpoint with the refresh token
  return axiosInstance
    .post(`/admins/refresh-token?token=${refreshToken}`)
    .then((response) => {
      accessToken.setAccessToken(response.data.data.accessToken);
      // Return the new access token
      return response.data.data.accessToken;
    });
}

export default axiosInstance;
