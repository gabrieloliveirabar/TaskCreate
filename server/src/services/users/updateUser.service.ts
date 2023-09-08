import { IUser, IUserUpdate } from "../../interfaces/user";
import { prisma } from "../../lib/prisma";

export const updateUserService = async (
  id: string,
  { name, datebirth, email, password }: IUserUpdate
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
      name: name === "" ? user?.name : String(name),
      datebirth: datebirth === "" ? user?.datebirth : String(datebirth),
      email: email === "" ? user?.email : String(email),
      password: password === "" ? user?.password : String(password),
    },
  });

  return updateUser;
};
