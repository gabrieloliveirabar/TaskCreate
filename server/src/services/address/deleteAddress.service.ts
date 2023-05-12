import { prisma } from "../../lib/prisma";

export const deleteAddressService = async (idParams: string) => {
  const deleteAddress = await prisma.address.delete({
    where: {
      id: idParams,
    },
  });

  return deleteAddress;
};
