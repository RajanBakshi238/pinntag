import axios from "axios";
import { clearStorage, getItem } from "../utils/localStorage";
import { PINNTAG_USER } from "./routes/RoleProtectedRoute";


const axiosInstance = axios.create({
  baseURL: "http://74.208.62.59:8080/v1",
});

// Add a request interceptor to add the JWT token to the headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getItem(PINNTAG_USER)?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle authentication errors
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      clearStorage();
      window.location.reload()
    }
    return Promise.reject(error);
  }
);

export { axiosInstance };
