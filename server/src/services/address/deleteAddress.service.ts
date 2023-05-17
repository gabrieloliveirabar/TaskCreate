import { prisma } from "../../lib/prisma";

export const deleteAddressService = async (idParams: string): Promise<void> => {
  const deleteAddress = await prisma.address.delete({
    where: {
      id: idParams,
    },
  });
};
