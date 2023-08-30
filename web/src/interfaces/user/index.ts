import { IAddress } from "../address"
import { ITask } from "../task"

export interface IUserRequest {
    name: string
    datebirth: string
    cpf:string
    email:string
    password:string
}

export interface IUser {
    id: string
    cpf?:string
    name: string
    email: string
    datebirth: string
    password?: string
    isAdm: boolean
    created_at: Date
    updated_at: Date
    adress: IAddress
    tasks: ITask[]

}


export interface IUserLogin {
    email: string
    password: string
}

export interface IUserUpdate {
    name?: string
    datebirth?: string
    cpf?:string
    email?:string
    password?:string
    
}