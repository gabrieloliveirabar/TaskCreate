import { IUserLogin } from "../../interfaces/user";
import { prisma } from "../../lib/prisma";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../../errors/appError";

export const loginUserService = async ({ email, password }: IUserLogin) => {
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if (!user) {
    throw new AppError("Wrong email/password", 403);
  }

  if (password !== user?.password) {
    throw new AppError("Wrong email/password", 403);
  }
  const token = jwt.sign(
    {
      isAdm: user.isAdm,
      id: user.id,
    },
    process.env.APP_SECRET as string,
    {
      expiresIn: "24h",
    }
  );

  return token;
};
