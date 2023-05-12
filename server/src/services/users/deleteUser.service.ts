import { prisma } from "../../lib/prisma";

export const deleteUserService = async (id: string):Promise<any> => {
  const deleteUser = await prisma.user.delete({
    where: {
      id: id,
    },
  });

  return deleteUser;
};
