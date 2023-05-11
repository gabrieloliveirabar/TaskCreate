import { Request, Response } from "express";
import { IUserUpdate } from "../../interfaces/users";
import { updateUserService } from "../../services/users/updateUser.service";

export const updateUserController = async (req: Request, res: Response) => {
  const { name, datebirth, cpf, email, password } = req.body;
  const id = req.params.id;

  const updateUser = await updateUserService(id, {
    name,
    datebirth,
    cpf,
    email,
    password,
  });
  return res.status(200).json({ message: "user Updated" });
};
