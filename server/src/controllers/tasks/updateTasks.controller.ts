import { Request, Response } from "express";
import { ITask, ITaskUpdate } from "../../interfaces/task";
import { updateTasksService } from "../../services/tasks/updateTasks.service";

export const updateTasksController = async (req: Request, res: Response) => {
  const idParams = req.params.id;
  const { title, description, categorie, status }: ITaskUpdate = req.body;
  
  const updateTask = await updateTasksService(idParams, {
    title,
    description,
    categorie,
    status,
  });
  return res.status(200).json(updateTask);
};
