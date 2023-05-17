import { AppError } from "../../errors/appError";
import { prisma } from "../../lib/prisma";

export const deleteTasksService = async (idParams: string): Promise<void> => {
  const task = await prisma.task.findUnique({
    where: {
      id: idParams,
    },
  });

  if (!task) {
    throw new AppError("task not exists");
  }

  const deleteTask = await prisma.task.delete({
    where: {
      id: idParams,
    },
  });
};
