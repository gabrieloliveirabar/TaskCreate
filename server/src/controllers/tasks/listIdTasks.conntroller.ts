import { Request, Response } from "express";
import { listIdTasksService } from "../../services/tasks/listIdTasks.service";

export const listIdTasksController = async (req: Request, res: Response) => {
    
    const idParams = req.params.id

    const task = await listIdTasksService(idParams)
    return res.status(200).json(task)
}