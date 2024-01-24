import axios from "axios";

export const instance = axios.create({
  baseURL: "http://74.208.62.59:5000/v1"
});
