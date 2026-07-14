import { useState } from "react";
import { loginUser, registerUser } from "../service/auth";

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (data) => {
    setLoading(true);

    const res = await loginUser(data);

    if (res === "Login Success") {
      setUser(data.email);
      localStorage.setItem("user", data.email);
    }

    setLoading(false);
    return res;
  };

  const register = async (data) => {
    setLoading(true);

    const res = await registerUser(data);

    setLoading(false);
    return res;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return {
    user,
    login,
    register,
    logout,
    loading,
  };
}
