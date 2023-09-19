import { prisma } from "../../lib/prisma";
import { IUser, IUserRequest } from "../../interfaces/user";

import { z } from "zod";
import { AppError } from "../../errors/appError";

export const createUserService = async ({
  name,
  datebirth,
  email,
  password,
}: IUserRequest): Promise<IUser> => {
  const createUserBody = z.object({
    name: z.string(),
    datebirth: z.string(),
    email: z.string(),
    password: z.string(),
  });
  createUserBody.parse({ name, datebirth, email, password });

  const emailExist = prisma.user.findFirst({
    where: {
      email: String(email),
    },
  });

  if (await emailExist) {
    throw new AppError("Email already registered.", 403);
  }
  
  const user = await prisma.user.create({
    data: {
      name: String(name),
      datebirth: String(datebirth),
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
