import { prisma } from "../../lib/prisma";
import { IUser, IUserRequest } from "../../interfaces/users";

import { z } from "zod";

export const createUserService = async ({
  name,
  datebirth,
  cpf,
  email,
  password,
}: IUserRequest): Promise<IUser> => {
  const createUserBody = z.object({
    name: z.string(),
    datebirth: z.string(),
    cpf: z.string(),
    email: z.string(),
    password: z.string(),
  });
  createUserBody.parse({ name, datebirth, cpf, email, password });

  const user = await prisma.user.create({
    data: {
      name: String(name),
      datebirth: String(datebirth),
      cpf: String(cpf),
      email: String(email),
      password: String(password),
    },
    select: {
      id: true,
      name: true,
      email: true,
      datebirth: true,
      password: false,
      isAdm: true,
      created_at: true,
      updated_at: true,
    },
  });

  return user;
};
