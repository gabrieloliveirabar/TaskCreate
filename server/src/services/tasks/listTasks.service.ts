import { Task } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { ITask } from "../../interfaces/task";

export const listTasksService = async (): Promise<any> => {
  const tasks = await prisma.task.findMany({
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
          email: true,
        },
      },
    },
  });

  return tasks;
};
