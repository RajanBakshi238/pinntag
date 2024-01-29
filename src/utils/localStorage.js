import { PINNTAG_USER } from "../config/routes/RoleProtectedRoute";

export const getItem = (key) => {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  }
  return item;
};

export const storeItem = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const removeItem = (key) => {
  localStorage.removeItem(key);
};

export const clearStorage = () => {
  localStorage.clear();
};

// TEMP FUNCTIONS

export const getToken = (key = PINNTAG_USER) => {
  const item = localStorage.getItem(key);
  if (item) {
    let user = JSON.parse(item)?.tokens[0];
    return {
      userToken: user?.userToken,
      businessToken: user?.businessToken
    }
  }
  return item;
};
