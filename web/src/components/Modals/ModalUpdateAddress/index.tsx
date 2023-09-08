import { IAddressUpdate } from "../../../interfaces/address";
import addressUpdateApi from "../../../services/address/apiAddressUpdate";
import { ButtonAction } from "../../Buttons/ButtonAction";

import { Form } from "../../Form";
import { InputTagModal } from "../../Inputs/InputTagModal";
import { ModalBase } from "../ModalBase";
import { Dispatch, SetStateAction } from "react";

interface IModalUpdateAddress {
  idAddress: string;
  setState: Dispatch<SetStateAction<boolean>>;
  objectAddress: IAddressUpdate;
  setOpenModalUpdateAddress: Dispatch<SetStateAction<boolean>>;
}
export const ModalUpdateAddress = ({
  setState,
  objectAddress,
  setOpenModalUpdateAddress,
}: IModalUpdateAddress) => {
  console.log(objectAddress);
  const onSubmitFunction = async (data: any) => {
    const res = await addressUpdateApi(data, objectAddress.id);
    console.log(res);
  };
  return (
    <ModalBase isOpen={true} setIs={setState} title="Atualização de Endereço">
      <div className="h-full">
        <Form onSubmit={onSubmitFunction}>
          {({ register, errors }) => (
            <div className="w-full h-full flex flex-col justify-center items-center gap-2 ">
              <InputTagModal
                name="city"
                label="Cidade"
                placeHolder={
                  objectAddress.city ? objectAddress.city : "digite sua cidade"
                }
                errors={errors}
                register={register}
                height={8}
                width={52}
                lgWidth="full"
              />
              <InputTagModal
                name="state"
                label="Estado"
                placeHolder={
                  objectAddress.state
                    ? objectAddress.state
                    : "digite seu estado"
                }
                errors={errors}
                register={register}
                height={8}
                width={52}
                lgWidth="full"
              />
              <div className=" flex  items-center justify-center w-52 gap-1 ">
                <div
                  className="flex justify-center items-start flex-col w-3/4
                "
                >
                  <InputTagModal
                    name="street"
                    label="Rua"
                    placeHolder={
                      objectAddress.street
                        ? objectAddress.street
                        : "digite sua rua"
                    }
                    errors={errors}
                    register={register}
                    height={8}
                    width={"full"}
                    lgWidth="full"
                  />
                </div>
                <div className="flex flex-col  w-1/4">
                  <InputTagModal
                    name="number"
                    label="Num"
                    placeHolder={
                      String(objectAddress.number)
                        ? String(objectAddress.number)
                        : "digite o número"
                    }
                    errors={errors}
                    register={register}
                    height={8}
                    width={"full"}
                    lgWidth="full"
                  />
                </div>
              </div>
              <InputTagModal
                name="postalCode"
                label="CEP"
                placeHolder={
                  objectAddress.postalCode
                    ? objectAddress.postalCode
                    : "digite seu CEP"
                }
                errors={errors}
                register={register}
                height={8}
                width={52}
                lgWidth="full"
              />
              <ButtonAction
                functionAction={() => {
                  ("");
                }}
                height="8"
                width="52"
                lgWidth="full"
                lgHeight=""
              >
                Atualizar
              </ButtonAction>
            </div>
          )}
        </Form>
      </div>
    </ModalBase>
  );
};
