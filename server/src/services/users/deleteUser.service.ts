import { prisma } from "../../lib/prisma";

export const deleteUserService = async (id: string): Promise<void> => {
  const deleteUser = await prisma.user.delete({
    where: {
      id: id,
    },
  });
};
