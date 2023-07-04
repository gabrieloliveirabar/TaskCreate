import Api from "./api"

export interface IApiRegister {
    name?: string;
    email?: string;
    password?: string;
    dateBirth?: string;
    cpf?: string
}

const apiRegister = async (data: IApiRegister) => {
    await Api.post("/users/", data)
}
export default apiRegister