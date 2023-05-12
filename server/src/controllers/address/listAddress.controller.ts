import { Request, Response } from "express";
import { listAddressService } from "../../services/address/listAddress.service";

export const listAddressController = async (req: Request, res: Response) => {
  const adddresses = await listAddressService();

  return res.status(200).json(adddresses);
};
