import { IUser, IUserUpdate } from "../../interfaces/user";
import { prisma } from "../../lib/prisma";

export const updateUserService = async (
  id: string,
  { name, datebirth, email }: IUserUpdate
): Promise<IUser> => {
  const user = await prisma.user.findFirst({
    where: {
      id: id,
    },
  });
  const updateUser = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      name: name === "" || name === undefined ? user?.name : String(name),
      datebirth:
        datebirth === "" || datebirth === undefined
          ? user?.datebirth
          : String(datebirth),
      email: email === "" || email === undefined ? user?.email : String(email),
    },
  });

  return updateUser;
};
