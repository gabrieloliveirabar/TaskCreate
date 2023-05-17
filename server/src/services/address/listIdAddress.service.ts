import { AppError } from "../../errors/appError";
import { prisma } from "../../lib/prisma";

export const listIdAddressService = async (idParams: string) => {
  const address = await prisma.address.findFirst({
    where: {
      id: idParams,
    },
  });

  if (!address) {
    throw new AppError("address not exists");
  }

  return address;
};
