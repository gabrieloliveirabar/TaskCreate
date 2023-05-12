import { Router } from "express";
import { createAddressController } from "../controllers/address/createAddress.controller";
import { verifyAuthUserMiddleware } from "../middlewares/verifyAuthUser.middleware";
import { listAddressController } from "../controllers/address/listAddress.controller";
import { listIdAddressController } from "../controllers/address/listIdAddress.controller";
import { updateAddressController } from "../controllers/address/updateAddress.contoller";
import { deleteAddressController } from "../controllers/address/deleteAddress.controller";

export const addressRouter = Router();
addressRouter.post("", verifyAuthUserMiddleware, createAddressController);
addressRouter.get("", verifyAuthUserMiddleware, listAddressController);
addressRouter.get("/:id", verifyAuthUserMiddleware, listIdAddressController);
addressRouter.patch("/:id", verifyAuthUserMiddleware, updateAddressController);
addressRouter.delete("/:id", verifyAuthUserMiddleware, deleteAddressController);
