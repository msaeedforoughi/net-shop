import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";
import { ILoginProvider, ILoginContext } from "../types/loginContext";

export const LoginContext = createContext({} as ILoginContext);

export const useLoginContext = () => {
  return useContext(LoginContext);
};

export function LoginProvider({ children }: ILoginProvider) {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (username: string, password: string) => {
    login(username, password).finally(() => {
      let token = "1234";
      localStorage.setItem("token", token);
      setIsLogin(true);
      navigate("/");
    });
  };

  const handleLogout = () => {
    setIsLogin(false);
    navigate("/login");
    localStorage.removeItem("token");
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
  }, []);

  return (
    <LoginContext.Provider
      value={{
        isLogin,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
