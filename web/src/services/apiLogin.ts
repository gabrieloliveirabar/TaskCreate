import Api from "./api";

export interface IApiLogin {
  email: string;
  password: string;
}

const apiLogin = async (data: object) => {
  return await Api.post("/login", data);
};
export default apiLogin;
