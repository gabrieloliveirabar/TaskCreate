import { Request, Response } from "express";
import { listPageTaskUserService } from "../../services/tasks/listPageTaskUser.service";
export const listPageTaskUserController = async (
  req: Request,
  res: Response
) => {
  const page = Number(req.params.page) || 1;
  const { filter } = req.query;
  const userId = req.user.id;

  const task = await listPageTaskUserService(page, userId, String(filter));
  return res.status(200).json(task);
};
