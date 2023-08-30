import { AppError } from "../../errors/appError";
import { ITask } from "../../interfaces/task";
import { prisma } from "../../lib/prisma";

export const listPageTaskUserService = async (
  page: number,
  userId: string,
  filter: string
) => {
  const pageSize = 3;
  const offset = (page - 1) * pageSize;

  if (filter === "health" || filter === "exercise" || filter === "work") {
    const tasks = await prisma.task.findMany({
      where: {
        user: { id: userId },
        categorie: filter,
      },

      skip: offset,
      take: pageSize,
    });

    return tasks;
  }

  const tasks = await prisma.task.findMany({
    where: {
      user: { id: userId },
    },

    skip: offset,
    take: pageSize,
  });

  return tasks;
};
