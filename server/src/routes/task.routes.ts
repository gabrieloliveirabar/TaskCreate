import { Router } from "express";
import { verifyAuthUserMiddleware } from "../middlewares/verifyAuthUser.middleware";
import { createTaskController } from "../controllers/tasks/createTasks.controller";
import { listTasksController } from "../controllers/tasks/listTasks.controller";
import { listIdTasksController } from "../controllers/tasks/listIdTasks.conntroller";
import { updateTasksController } from "../controllers/tasks/updateTasks.controller";
import { deleteTasksController } from "../controllers/tasks/deleteTasks.controller";

export const taskRouter = Router();
taskRouter.post("", verifyAuthUserMiddleware, createTaskController);
taskRouter.get("", verifyAuthUserMiddleware, listTasksController);
taskRouter.get("/:id", verifyAuthUserMiddleware, listIdTasksController);
taskRouter.patch("/:id", verifyAuthUserMiddleware, updateTasksController);
taskRouter.delete("/:id", verifyAuthUserMiddleware, deleteTasksController);
