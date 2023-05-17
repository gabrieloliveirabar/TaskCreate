import { Request, Response } from "express";
import { deleteTasksService } from "../../services/tasks/deleteTasks.service";

export const deleteTasksController = async (req: Request, res: Response) => {
  const idParams = req.params.id;
  const deleTask = await deleteTasksService(idParams);

  return res.status(204).json({"message": "task deleted"});
};
