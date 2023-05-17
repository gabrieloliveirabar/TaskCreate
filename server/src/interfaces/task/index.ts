import { IUser } from "../user";

export interface ITaskRequest {
  title: string
  description: string
  categorie: string
}

export interface ITask extends ITaskRequest {
  id: string;
  created_at: Date;
  updated_at?: Date;
  user?: {
    id: string
    cpf:string
    name: string
    email: string
  }
}

export interface ITaskUpdate {
  title?: string;
  description?: string;
  categorie?: string;
  status?: boolean;
  updated_at?: Date;
}
