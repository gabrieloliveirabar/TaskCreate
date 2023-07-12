import { AppError } from "../../errors/appError";
import { IUser } from "../../interfaces/user";
import { prisma } from "../../lib/prisma";

export const listUserIdService = async (id: string): Promise<IUser> => {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      datebirth: true,
      password: true,
      isAdm: true,
      created_at: true,
      updated_at: true,
      tasks: true,
      address:true
    }
    
  });

  if (!user) {
    throw new AppError("user not exists", 403);
  }

  return user;
};
