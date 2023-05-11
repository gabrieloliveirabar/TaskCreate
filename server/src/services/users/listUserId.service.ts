import { prisma } from "../../lib/prisma";

export const listUserIdService = async (id: string) => {
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

  return user;
};
