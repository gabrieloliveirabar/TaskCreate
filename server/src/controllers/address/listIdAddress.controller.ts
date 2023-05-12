import { Request, Response } from "express";
import { listIdAddressService } from "../../services/address/listIdAddress.service";

export const listIdAddressController = async (req: Request, res: Response) => {
  const idParams = req.params.id;

  const address = await listIdAddressService(idParams);
  return res.status(200).json(address);
};
