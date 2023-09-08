import Api from "../api";

export interface IApiUserRegister {
  name: string;
  email: string;
  password: string;
  dateBirth: string;
}

const apiUserRegister = async (data: IApiUserRegister) => {
  return await Api.post("/users", data);
};
export default apiUserRegister;
