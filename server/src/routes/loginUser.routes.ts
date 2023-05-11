import { Router } from "express";
import { loginUserController } from "../controllers/session/loginUser.controller";



export const loginRouter = Router();

loginRouter.post("", loginUserController)

