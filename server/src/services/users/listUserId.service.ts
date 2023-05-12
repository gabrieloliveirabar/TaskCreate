import { AppError } from "../../errors/appError";
import { IUser } from "../../interfaces/users";
import { prisma } from "../../lib/prisma";

export const listUserIdService = async (id: string):Promise<IUser> => {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
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

  if (!user) {
    throw new AppError("Wrong email/password", 403);
  }

  return user;
};
