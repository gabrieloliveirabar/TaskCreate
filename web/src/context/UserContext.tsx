import { createContext, useState, ReactNode } from "react";
import apiRegister from "../services/apiRegister";

interface IUserProvider {
  children: ReactNode;
}
export interface IUserContext {
  userExample: string;
  setUserExample: React.Dispatch<React.SetStateAction<string>>;
  registerUserApi: (data: object) => void;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProvider) => {
  const [userExample, setUserExample] = useState("ola");

  const registerUserApi = (data: object) => {
    console.log(data);
    apiRegister(data);
  };
  
  return (
    <UserContext.Provider
      value={{ userExample, setUserExample, registerUserApi }}
    >
      {children}
    </UserContext.Provider>
  );
};
