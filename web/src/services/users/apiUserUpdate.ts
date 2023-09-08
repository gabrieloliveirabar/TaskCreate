import Api from "../api";

export interface IApiUserUpdate {
  name?: string;
  email?: string;
  password?: string;
  dateBirth?: string;
 
}


const apiUserUpdate = async (data: IApiUserUpdate,  idUser: string) => {
  return await Api.patch(`/users/${idUser}`, data);
};
export default apiUserUpdate;
