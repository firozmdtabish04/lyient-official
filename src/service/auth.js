import { postRequest } from "./api";

export const registerUser = (data) => {
  return postRequest("/api/auth/register", data);
};

export const loginUser = (data) => {
  return postRequest("/api/auth/login", data);
};
