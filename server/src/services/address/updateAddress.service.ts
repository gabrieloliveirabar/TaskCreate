import { z } from "zod";
import { IAddressUpdate } from "../../interfaces/address";
import { prisma } from "../../lib/prisma";

export const updateAddressService = async (
  idParams: string,
  { street, city, state, postalCode, number }: IAddressUpdate
) => {
  const createAdressBody = z.object({
    street: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    postalCode: z.string().optional(),
    number: z.number().optional(),
  });

  createAdressBody.parse({ street, city, state, postalCode, number });

  const addressUpdate = await prisma.address.update({
    where: {
      id: idParams,
    },
    data: {
      street,
      city,
      state,
      postalCode,
      number,
    },
  });

  return addressUpdate;
};
