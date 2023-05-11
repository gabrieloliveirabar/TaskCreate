import { prisma } from "../../lib/prisma";

export const listUserService = async () => {
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
