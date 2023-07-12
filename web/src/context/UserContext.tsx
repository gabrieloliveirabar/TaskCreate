import { createContext, useState, ReactNode } from "react";
import apiRegister from "../services/apiRegister";
import apiLogin from "../services/apiLogin";
import jwtDecode from "jwt-decode";
import api from "../services/api";

interface IUserProvider {
  children: ReactNode;
}
export interface IUserContext {
  userExample: string;
  setUserExample: React.Dispatch<React.SetStateAction<string>>;
  registerUserApi: (data: object) => void;
  loginUserApi: (data: object) => void;
  status: number;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProvider) => {
  const [userExample, setUserExample] = useState("ola");
  const [status, setStatus] = useState(0);

  const registerUserApi = async (data: object) => {
    const res = await apiRegister(data);
    setStatus(res.status);
  };

  const loginUserApi = async (data: object) => {
    const res = await apiLogin(data);
    console.log(res.data.token)
    window.localStorage.clear();
    window.localStorage.setItem("@TOKEN", res.data.token);

    const token = localStorage.getItem("@TOKEN");

    const decoded = jwtDecode(token!);
    const { id }: any = decoded;

    window.localStorage.setItem("@USERID", id);

    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  return (
    <UserContext.Provider
      value={{
        userExample,
        setUserExample,
        registerUserApi,
        status,
        loginUserApi,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
