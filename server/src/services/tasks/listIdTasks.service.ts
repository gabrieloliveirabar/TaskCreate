import { AppError } from "../../errors/appError";
import { ITask } from "../../interfaces/task";
import { prisma } from "../../lib/prisma";

export const listIdTasksService = async (idParams: string): Promise<ITask> => {
  const tasks = await prisma.task.findUnique({
    where: {
      id: idParams,
    },
    select: {
      id: true,
      title: true,
      description: true,
      categorie: true,
      status: true,
      created_at: true,
      user: {
        select: {
          id: true,
          name: true,
          cpf: true,
          email: true,
        },
      },
    },
  });

  if (!tasks) {
    throw new AppError("task not exists");
  }
  return tasks;
};
