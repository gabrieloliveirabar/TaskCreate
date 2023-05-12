import { Request, Response } from "express";
import { updateAddressService } from "../../services/address/updateAddress.service";

export const updateAddressController = async (req: Request, res: Response) => {
  const idParams = req.params.id;
  const { street, city, state, postalCode, number } = req.body;

  const addressUpdate = await updateAddressService(idParams, {
    street,
    city,
    state,
    postalCode,
    number,
  });

  return res.status(200).json(addressUpdate);
};
