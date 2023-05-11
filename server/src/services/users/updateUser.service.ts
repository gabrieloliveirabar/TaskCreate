import { IUserUpdate } from "../../interfaces/users";
import { prisma } from "../../lib/prisma";

export const updateUserService = async (
  id: string,
  { name, datebirth, cpf, email, password }: IUserUpdate
) => {
  const updateUser = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      name: String(name),
      datebirth: String(datebirth),
      cpf: String(cpf),
      email: String(email),
      password: String(password),
    },
  });

  return updateUser;
};
