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
    number: z.string(),
  });

  createAdressBody.parse({ street, city, state, postalCode, number });

  const address = await prisma.address.findFirst({
    where: {
      id: idParams,
    },
  });
  const addressUpdate = await prisma.address.update({
    where: {
      id: idParams,
    },
    data: {
      street: street === "" ? address?.street : String(street),
      city: city === "" ? address?.city : String(city),
      state: state === "" ? address?.state : String(state),
      postalCode: postalCode === "" ? address?.postalCode : String(postalCode),
      number: String(number) === "" ? address?.number : Number(number),
    },
  });

  return addressUpdate;
};
