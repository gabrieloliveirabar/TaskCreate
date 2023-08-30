import Api from "../api";

export interface IApiLogin {
  email: string;
  password: string;
}

const apiLogin = async (data: IApiLogin) => {
  const response =  await Api.post("/login", data);
  return response
};
export default apiLogin;
