import { Request, Response } from "express";
import { deleteUserService } from "../services/deleteUser.service";

export const deleteUserController = async (req: Request, res:Response) => {
    const id = req.params.id

    const deleteUser = await deleteUserService(id)
    return res.status(204).json(deleteUser)
}