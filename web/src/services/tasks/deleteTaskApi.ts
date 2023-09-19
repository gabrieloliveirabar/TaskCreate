import api from "../api";

const deleteTaskApi = async (id: string) => {
    try {

        const res = await api.delete(`/tasks/${id}`)

        
        return res.status
        
    } catch (error) {
        console.log(error)
    }
}
export default deleteTaskApi