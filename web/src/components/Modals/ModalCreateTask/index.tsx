import { Form } from "../../Form";
import { ModalBase } from "../ModalBase";
import { Children, ReactNode, useContext } from "react";
import { TaskContext } from "../../../context/TaskContext";
import { InputTagModal } from "../../Inputs/InputTagModal";
import { SelectTagModal } from "../../Inputs/SelectTagModal";
import { OptionSelectTag } from "../../Inputs/SelectTagModal/option";
import { IApiTaskRegister } from "../../../interfaces/task";
import { TextArea } from "../../Inputs/TextArea/indes";
import { toastError, toastSuccess } from "../../ToastConfig";

export const ModalCreateTask = () => {
  const { setCreateTaskModal, registerTaskApi } = useContext(TaskContext);

  const onSubmitFunction = async (data: IApiTaskRegister) => {
    const res = await registerTaskApi(data);

    res === 201
      ? (setCreateTaskModal(false), toastSuccess("tarefa criada com sucesso"))
      : toastError("ERRO ao criar a tarefa");
  };
  return (
    <ModalBase title="Create Task" isOpen={true} setIs={setCreateTaskModal}>
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
                placeHolder="digite aqui o titulo"
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
                <OptionSelectTag
                  optionText="- escolha a categoria -"
                  optionValue="#"
                />
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
                    placeHolder="digite sua descrição"
                    errors={errors}
                    register={register}
                    height={28}
                    width={"full"}
                    lgWidth="full"
                  />
                </div>
                <button className="h-full mt-12 bg-button_background focus:outline-slate-50  ">
                  criar
                </button>
              </div>
            </>
          )}
        </Form>
      </div>
    </ModalBase>
  );
};
