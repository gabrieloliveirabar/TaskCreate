import { Form } from "../../Form";
import { ModalBase } from "../ModalBase";
import { Dispatch, SetStateAction, useContext } from "react";
import { InputTagModal } from "../../Inputs/InputTagModal";
import { SelectTagModal } from "../../Inputs/SelectTagModal";
import { OptionSelectTag } from "../../Inputs/SelectTagModal/option";
import { TextArea } from "../../Inputs/TextArea/indes";
import { toastError, toastSuccess } from "../../ToastConfig";
import { ITaskUpdate } from "../../../interfaces/task";

export interface IObjectTask {
  title: string;
  description: string;
  categ: string;
}
interface IModalUpdateTask {
  idTask: string;
  setState: Dispatch<SetStateAction<boolean>>;
  objectTask: IObjectTask;
  functionApi: (data: ITaskUpdate, id: string) => Promise<number | void>;
  setDisplayModalUpdateOrDelete: Dispatch<SetStateAction<boolean>>;
}

export const ModalUpdateTask = ({
  idTask,
  setState,
  objectTask,
  functionApi,
  setDisplayModalUpdateOrDelete,
}: IModalUpdateTask) => {
  const onSubmitFunction = async (data: any) => {
    const res = await functionApi(data, idTask);

    res === 200
      ? (setState(false),
        toastSuccess("Tarefa atualizada"),
        setDisplayModalUpdateOrDelete(false))
      : toastError("Erro na atualização");
  };
  return (
    <ModalBase title="Criação de Task" isOpen={true} setIs={setState}>
      <div
        className=" w-full h-72 bg-sky-900 flex justify-start items-start  rounded tablet:justify-center
      "
      >
        <Form onSubmit={onSubmitFunction}>
          {({ register, errors }) => (
            <>
              <InputTagModal
                name="title"
                label="titulo"
                placeHolder={
                  objectTask.title ? objectTask.title : "digite aqui o titulo"
                }
                errors={errors}
                register={register}
                height={8}
                width={52}
                lgWidth="full"
              />

              <SelectTagModal
                register={register}
                errors={errors}
                label="categoria"
                name="categorie"
              >
                <OptionSelectTag optionText="saúde" optionValue="health" />
                <OptionSelectTag
                  optionText="exercício"
                  optionValue="exercise"
                />
                <OptionSelectTag optionText="trabalho" optionValue="work" />
              </SelectTagModal>
              <div className="flex justify-center items-center w-72 gap-3 ml-2 h-28 m-auto mt-2 tablet:w-full tablet:ml-0 tablet:gap-4 lg:items-center">
                <div className="w-5/6 h-full  ">
                  <TextArea
                    name="description"
                    label="descrição"
                    placeHolder={
                      objectTask.description
                        ? objectTask.description
                        : "digite sua descrição"
                    }
                    errors={errors}
                    register={register}
                    height={28}
                    width={"full"}
                    lgWidth="full"
                  />
                </div>
                <button className="h-full mt-12 bg-button_background focus:outline-slate-50  ">
                  atualizar
                </button>
              </div>
            </>
          )}
        </Form>
      </div>
    </ModalBase>
  );
};
