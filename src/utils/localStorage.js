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
    localStorage.removeItem(key)
}

export const clearStorage = () => {
    localStorage.clear()
}
