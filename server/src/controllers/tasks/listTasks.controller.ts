import { Request, Response } from "express";
import { listTasksService } from "../../services/tasks/listTasks.service";

export const listTasksController = async (req: Request, res: Response) => {
  const tasks = await listTasksService();

  return res.status(200).json(tasks);
};
