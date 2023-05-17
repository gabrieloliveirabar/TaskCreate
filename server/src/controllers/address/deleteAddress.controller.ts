import { Request, Response } from "express";
import { deleteAddressService } from "../../services/address/deleteAddress.service";

export const deleteAddressController = async (req: Request, res: Response) => {
  const idParams = req.params.id;

  const deleteAddress = await deleteAddressService(idParams);
  return res.status(204).json({message: "address deleted"});
};
