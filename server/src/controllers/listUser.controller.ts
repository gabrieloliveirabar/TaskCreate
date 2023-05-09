import { Request, Response } from "express";
import { listUserService } from "../services/listUser.service";

export const listUserController = async (req: Request, res: Response) => {
    
    const users = await listUserService()

    return res.status(200).json(users)
}