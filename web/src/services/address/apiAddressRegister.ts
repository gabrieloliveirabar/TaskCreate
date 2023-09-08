import { IAddressRequest } from "../../interfaces/address";
import api from "../api";

const apiAddressRegister = async (data: IAddressRequest) => {
  try {
    const token = window.localStorage.getItem("@TOKEN");
    api.defaults.headers.common.Authorization = `Bearer ${token}`;

    return await api.post("/address", data);
  } catch (err) {
    return console.log(err);
  }
};
export default apiAddressRegister;
