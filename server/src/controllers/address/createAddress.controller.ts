import { Request, Response } from "express";
import { IAddressRequest } from "../../interfaces/address";
import { createAddressService } from "../../services/address/createAddress.service";

export const createAddressController = async (req: Request, res: Response) => {
  const { street, city, state, postalCode, number }: IAddressRequest = req.body;
 
  const userId = req.user.id;


  const address = await createAddressService(
    { street, city, state, postalCode, number },
    userId
  );

  return res.status(201).json(address);
};
