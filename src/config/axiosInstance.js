import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://74.208.62.59:5000/v1"
});
