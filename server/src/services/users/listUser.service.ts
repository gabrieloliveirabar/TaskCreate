import { User } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { IUser } from "../../interfaces/users";

export const listUserService = async ():Promise<IUser[]> => {
  const users = await prisma.user.findMany({
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

  return users;
};
