// utils/auth.js

const TOKEN_KEY = "token";
const USER_KEY = "user";
const EXPIRY_KEY = "expiry";

// ✅ Save login data with expiry
export const login = (token, user) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));

  const expiryTime = new Date().getTime() + 60 * 60 * 1000; // 1 hour
  localStorage.setItem(EXPIRY_KEY, expiryTime);
};

// ✅ Check auth
export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  const expiry = localStorage.getItem("expiry");

  if (!token || !expiry) return false;

  const expiryTime = Number(expiry); // ✅ FIX

  if (Date.now() > expiryTime) {
    logout();
    return false;
  }

  return true;
};

// ✅ Logout
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  localStorage.removeItem(EXPIRY_KEY);
};

// ✅ Get user
export const getUser = () => {
  return localStorage.getItem(USER_KEY);
};
