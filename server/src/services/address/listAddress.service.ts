import { prisma } from "../../lib/prisma";

export const listAddressService = async () => {
  const addresses = await prisma.address.findMany({
    include: {
      user: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });

  return addresses;
};
