import { IAddress, IAddressRequest } from "../../interfaces/address";
import { z } from "zod";
import { prisma } from "../../lib/prisma";
import { AppError } from "../../errors/appError";

export const createAddressService = async (
  { street, city, state, postalCode, number }: IAddressRequest,
  userId: string
): Promise<IAddress> => {
  const createAdressBody = z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    postalCode: z.string(),
    number: z.string(),
  });

  createAdressBody.parse({ street, city, state, postalCode, number });

  const addresses = await prisma.address.findFirst({
    where: {
      postalCode: postalCode,
      number: Number(number),
    },
  });

  if (addresses) {
    throw new AppError("address already exists");
  }

  const address = await prisma.address.create({
    data: {
      street: String(street),
      city: String(city),
      state: String(state),
      postalCode: String(postalCode),
      number: Number(number),
      user_id: userId,
    },
  });

  return address;
};
