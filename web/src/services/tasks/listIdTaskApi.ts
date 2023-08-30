import api from "../api";

const listIdTaskApi = async (id: string) => {
  try {
    return await api.get(`/${id}`);
  } catch (error) {
    console.log(error);
  }
};
export default listIdTaskApi
