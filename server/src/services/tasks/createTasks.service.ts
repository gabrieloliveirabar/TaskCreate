import { Address, Categoria, Task } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { ITaskRequest } from "../../interfaces/task";
import { AppError } from "../../errors/appError";

export const createTaskService = async (
  userId: string,
  { title, description, categorie }: ITaskRequest
): Promise<Task> => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("user not exists");
  }

  const taskAlreadyexist = await prisma.task.findFirst({
    
    where: {
      title: title,
      description: description,
    },
  });

  if (taskAlreadyexist) {
    throw new AppError("task already exist");
  }

  if (
    categorie === "health" ||
    categorie == "exercise" ||
    categorie === "work"
  ) {
    let task = await prisma.task.create({
      data: {
        title: title,
        description: description,
        categorie: categorie,
        user_id: userId,
      },
    });

    return task;
  } else {
    throw new AppError("categorie invalid");
  }
};
