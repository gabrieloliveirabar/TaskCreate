import Api from "../api";

const taskUpdateApi = async (data: any, idTasks: string) => {
  try {
    const res = await Api.patch(`/tasks/${idTasks}`, data);
    return res.status;
  } catch (error) {
    return console.log(error);
  }
};
export default taskUpdateApi;
