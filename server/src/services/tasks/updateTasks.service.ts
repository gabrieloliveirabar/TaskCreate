import { AppError } from "../../errors/appError";
import { ITask, ITaskUpdate } from "../../interfaces/task";
import { prisma } from "../../lib/prisma";

export const updateTasksService = async (
  idParams: string,
  { title, description, categorie, status }: ITaskUpdate
) => {
  if (
    categorie === "health" ||
    categorie == "exercise" ||
    categorie === "work" ||
    categorie === undefined
  ) {
    const task = await prisma.task.findFirst({
      where: {
        id: idParams,
      },
    });
    let updateTask = await prisma.task.update({
      where: {
        id: idParams,
      },
      data: {
        categorie: categorie,
        description: description === "" ? task?.description : description,
        title: title === "" ? task?.title : title,
        status: status,
      },
    });
    if (!updateTask) {
      throw new AppError("task not exists");
    }

    return updateTask;
  } else {
    throw new AppError("categorie invalid");
  }
};
