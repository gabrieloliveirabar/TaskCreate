import { Request, Response } from "express";
import { listUserIdService } from "../services/listUserId.service";

export const listUserIdController = async (req: Request, res: Response) => {

    const id = req.params.id
    const userId = await listUserIdService(id)

    return res.status(200).json(userId)

}