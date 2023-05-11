import { Router } from "express";
import { createUserController } from "../controllers/users/createUser.controller";
import { listUserController } from "../controllers/users/listUser.controller";
import { listUserIdController } from "../controllers/users/listUserId.controller";
import { updateUserController } from "../controllers/users/updateUser.controller";
import { deleteUserController } from "../controllers/users/deleteUser.controller";

export const userRouter = Router();

userRouter.post("", createUserController);
userRouter.get("", listUserController);
userRouter.get("/:id", listUserIdController);
userRouter.patch("/:id", updateUserController);
userRouter.delete("/:id", deleteUserController);
