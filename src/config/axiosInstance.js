import axios from "axios";
import { clearStorage, getItem } from "../utils/localStorage";
import { PINNTAG_USER } from "./routes/RoleProtectedRoute";


const API_URL = process.env.REACT_API_URL ?? "http://74.208.62.59:8080/v1"

const axiosInstance = axios.create({
  baseURL: API_URL,
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
    let retry = true
    if (error.response && error.response.status === 401 && retry) {
      retry = false
      clearStorage();
    }
    return Promise.reject(error);
  }
);

export { axiosInstance };
