import { Request, Response } from "express";
import { createUserService } from "../../services/users/createUser.service";
export const createUserController = async (req: Request, res: Response) => {
  const { name, datebirth, cpf, email, password } = req.body;

  const user = await createUserService({
    name,
    datebirth,
    cpf,
    email,
    password,
  });

  return res.status(201).json(user);
};
