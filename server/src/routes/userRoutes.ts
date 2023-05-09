import { Router } from "express";
import { createUserController } from "../controllers/createUser.controller";
import { listUserController } from "../controllers/listUser.controller";
import { listUserIdController } from "../controllers/listUserId.controller";
import { updateUserController } from "../controllers/updateUser.controller";
import { deleteUserController } from "../controllers/deleteUser.controller";

export const userRouter = Router()

userRouter.post("", createUserController)
userRouter.get("", listUserController)
userRouter.get("/:id", listUserIdController)
userRouter.patch("/:id", updateUserController)
userRouter.delete("/:id", deleteUserController)