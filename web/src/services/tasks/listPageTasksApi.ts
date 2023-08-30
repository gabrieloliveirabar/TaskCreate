import api from "../api"

export const listPageTasksApi = async (page: string, filter: string) => {
    try {
        const response = await api.get(`tasks/${page}?filter=${filter}`)

        return response.data
    } catch (error) {
        return console.log(error)
    }
   
}