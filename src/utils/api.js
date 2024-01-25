import { axiosInstance } from "../config/axiosInstance";

export const getData = async (END_POINT) => {
  let response;
  try {
    response = await axiosInstance.get(END_POINT);
  } catch (err) {
    response = err;
  }

  return {
    data: response?.data,
    error: response?.data?.error,
  };
};

export const postData = async (END_POINT, body) => {
  let response;
  try {
    response = await axiosInstance.post(END_POINT, body);
  } catch (err) {
    response = err;
  }

  return {
    data: response?.data,
    error: response?.data?.error,
  };
};

export const putData = async (END_POINT, body) => {
  let response;
  try {
    response = await axiosInstance.put(END_POINT, body);
  } catch (err) {
    response = err;
  }

  return {
    data: response?.data,
    error: response?.data?.error,
  };
};

export const deleteData = async (END_POINT) => {
  let response;
  try {
    response = await axiosInstance.delete(END_POINT);
  } catch (err) {
    response = err;
  }

  return {
    data: response?.data,
    error: response?.data?.error,
  };
};


