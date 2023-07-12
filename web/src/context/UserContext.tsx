import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import apiRegister from "../services/apiRegister";
import apiLogin from "../services/apiLogin";
import jwtDecode from "jwt-decode";
import api from "../services/api";

interface IUserProvider {
  children: ReactNode;
}
export interface IUserContext {
  userObject: object;
  registerUserApi: (data: object) => Promise<number>;
  loginUserApi: (data: object) => Promise<number>;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProvider) => {
  const [userObject, setUserObject] = useState<object>({});
  const [isLogged, setIsLogged] = useState<boolean>(false);
  console.log(userObject)
  const registerUserApi = async (data: object) => {
    const res = await apiRegister(data);

    return res.status;
  };

  const loginUserApi = async (data: object) => {
    const res = await apiLogin(data);
    console.log(res.data.token);
    window.localStorage.clear();
    window.localStorage.setItem("@TOKEN", res.data.token);

    const token = localStorage.getItem("@TOKEN");

    const decoded = jwtDecode(token!);
    const { id }: any = decoded;

    window.localStorage.setItem("@USERID", id);

    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    return res.status;
  };

  useEffect(() => {
    const userCompleted = async () => {
      const token = localStorage.getItem("@TOKEN");
      const userIdLocal = localStorage.getItem("@USERID");
      if (token) {
        try {
          api.defaults.headers.common.Authorization = `Bearer ${token}`;
          const { data } = await api.get(`/users/${userIdLocal}`);

          setUserObject(data);
          setIsLogged(true);
        } catch (err) {
          console.log(err);
        }
      }
    };
    userCompleted();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userObject,
        registerUserApi,
        loginUserApi,
        setIsLogged,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
