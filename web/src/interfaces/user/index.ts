import { IAddress } from "../address";
import { ITask } from "../task";

export interface IUserRequest {
  name: string;
  datebirth: string;
  email: string;
  password: string;
}

export interface IUser {
  id: string;

  name: string;
  email: string;
  datebirth: string;
  password?: string;
  isAdm: boolean;
  created_at: Date;
  updated_at: Date;
  address: IAddress;
  tasks: ITask[];
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserUpdate {
  data: any;
  name?: string;
  datebirth?: string;

  email?: string;
  password?: string;
}
