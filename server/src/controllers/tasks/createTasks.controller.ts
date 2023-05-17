import { Request, Response } from "express";
import { createTaskService } from "../../services/tasks/createTasks.service";
import { ITaskRequest } from "../../interfaces/task";

export const createTaskController = async (req: Request, res: Response) => {
    const { title, description,  categorie}:ITaskRequest = req.body
    const userId = req.user.id

    const task = await createTaskService( userId, { title, description,  categorie})

return res.status(201).json(task)
}