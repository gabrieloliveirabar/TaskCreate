import { prisma } from "../../lib/prisma";

export const listIdAddressService = async (idParams: string) => {
  const address = await prisma.address.findFirst({
    where: {
      id: idParams,
    },
  });

  return address;
};
