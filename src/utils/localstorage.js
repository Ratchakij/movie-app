const ACCESS_USER = "user";

export const setAccessUser = (user) => localStorage.setItem(ACCESS_USER, user);

export const getAccessUser = () => localStorage.getItem(ACCESS_USER);

export const removeAccessUser = () => localStorage.removeItem(ACCESS_USER);
