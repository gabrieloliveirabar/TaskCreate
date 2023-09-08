import Api from "../api";

const addressUpdateApi = async (data: any, idAddress: string) => {
  try {
    const token = window.localStorage.getItem("@TOKEN");
    Api.defaults.headers.common.Authorization = `Bearer ${token}`;
    return await Api.patch(`/address/${idAddress}`, data);
  } catch (error) {
    return console.log(error);
  }
};
export default addressUpdateApi;
