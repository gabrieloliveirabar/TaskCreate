import { IUser, IUserUpdate } from "../../../interfaces/user";
import apiUserUpdate from "../../../services/users/apiUserUpdate";
import { ButtonAction } from "../../Buttons/ButtonAction";
import { ButtonPathPage } from "../../Buttons/ButtonPathPage";
import { Form } from "../../Form";
import { InputTagModal } from "../../Inputs/InputTagModal";
import { toastError, toastSuccess } from "../../ToastConfig";
import { ModalBase } from "../ModalBase";
import { Dispatch, SetStateAction } from "react";

interface IModalUpdateUser {
  idUser: string;
  setState: Dispatch<SetStateAction<boolean>>;
  objectUser: IUser;
  setOpenModalUpdateUser: Dispatch<SetStateAction<boolean>>;
}

export const ModalUpdateUser = ({
  idUser,
  setState,
  objectUser,
  setOpenModalUpdateUser,
}: IModalUpdateUser) => {
  const onSubmitFunction = async (data: any) => {
    const res = await apiUserUpdate(data, idUser);

    res.status === 200
      ? (toastSuccess("atualizado com sucesso"), setOpenModalUpdateUser(false))
      : toastError("não foi possivel atualizar");
  };
  return (
    <ModalBase title="Atualização de usuário" isOpen={true} setIs={setState}>
      <div className="flex justify-center items-center ">
        <Form onSubmit={onSubmitFunction}>
          {({ register, errors }) => (
            <div className="w-full h-full flex flex-col justify-center items-center gap-2  ">
              <InputTagModal
                name="name"
                label="Nome"
                placeHolder={
                  objectUser.name ? objectUser.name : "digite aqui o titulo"
                }
                errors={errors}
                register={register}
                height={8}
                width={52}
                lgWidth="full"
              />
              <InputTagModal
                name="datebirth"
                label="Data de nascimento"
                placeHolder={
                  objectUser.datebirth
                    ? objectUser.datebirth
                    : "digite data de nascimento"
                }
                errors={errors}
                register={register}
                height={8}
                width={52}
                lgWidth="full"
              />

              <InputTagModal
                name="email"
                label="Email"
                placeHolder={
                  objectUser.email ? objectUser.email : "digite o seu Email"
                }
                errors={errors}
                register={register}
                height={8}
                width={52}
                lgWidth="full"
              />
              <ButtonAction
                height="8"
                lgHeight=""
                width="52"
                lgWidth="full"
                functionAction={() => {
                  ("");
                }}
              >
                Atualizar
              </ButtonAction>

              <p className="text-center font-sans ">
                para mudar senha é necessário verificação de segurança
              </p>
              <button className="flex justify-center items-center border-0 p-0 m-0 hover:outline-none hover:scale-110 focus:outline-none text-sky-400">
                clique aqui
              </button>
            </div>
          )}
        </Form>
      </div>
    </ModalBase>
  );
};
