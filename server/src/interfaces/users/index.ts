export interface IUserRequest {
    name: String
    datebirth: String
    cpf:String
    email:String
    password:String
}

export interface IUser {
    id: string
    name: string
    email: string
    datebirth: String
    password: String
    isAdm: boolean
    created_at: Date
    updated_at: Date
}


export interface IUserLogin {
    email: string
    password: string
}

export interface IUserUpdate {
    name?: String
    datebirth?: String
    cpf?:String
    email?:String
    password?:String
    
}