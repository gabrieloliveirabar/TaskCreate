import { IApiTaskRegister } from "../../interfaces/task";
import Api from "../api";

const apiTaskRegister = async (data: IApiTaskRegister) => {
    try {
    const res = await Api.post("/tasks", data);
    return res.status
  } catch (err) {
    return console.log( err);
  }
};
export default apiTaskRegister;
