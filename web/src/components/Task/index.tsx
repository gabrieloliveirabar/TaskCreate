import { FaTrash } from "react-icons/fa";
import { GrAppsRounded, GrCheckbox } from "react-icons/gr";
import TextModal from "../../components/Modals/ModalTextDescription";
import { useState, useContext } from "react";
import { ButtonAction } from "../Buttons/ButtonAction";
import IntialTransformAnimation from "../Animation/IntialTransformAnimation";
import { TaskContext } from "../../context/TaskContext";
import { ModalUpdateTask } from "../Modals/ModalUpdateTask";
import deleteTaskApi from "../../services/tasks/deleteTaskApi";

interface ITask {
  title: string;
  categorie: string;
  description: string;
  framerX: number;
  idTask: string;
}
export const Task = ({
  title,
  categorie,
  description,
  framerX,
  idTask,
}: ITask) => {
  const [displayModalUpdateOrDelete, setDisplayModalUpdateOrDelete] =
    useState<boolean>(false);
  const [descriptionTaskModal, setDescriptionTaskModal] =
    useState<boolean>(false);
  const [updateTaskModal, setUpdateTaskModal] = useState<boolean>(false);

  const { typeCategorie, apiUpdateTask, deleteTask } = useContext(TaskContext);
  
  const categ = typeCategorie(categorie);
  const objectTaskId = { title, categ, description };
  

  const handleClickTaskUpdateOrDelete = (display: boolean) => {
    if (display === false) {
      setDisplayModalUpdateOrDelete(true);
    } else {
      setDisplayModalUpdateOrDelete(false);
    }
  };

  const handClickTaskDescription = () => {
    if (descriptionTaskModal === false) {
      setDescriptionTaskModal(true);
    } else {
      setDescriptionTaskModal(false);
    }
  };

  return (
    <li className="w-full h-11" key={idTask}>
      <IntialTransformAnimation duration={0.3 + framerX}>
        <div className="w-full h-11 rounded bg-input_background flex justify-around items-center gap-2 py-2 px-2 ">
          <div className=" flex justify-between items-center w-1/4 ">
            <input
              type="checkbox"
              className={`w-1/2 custom-checkbox accent-lime-600 focus:text-white cursor-pointer`}
              onClick={() =>{deleteTaskApi(idTask)}}
            />

            <div
              className={`flex justify-center item gap-1 w-1/2 text-center font-medium p-0 cursor-pointer transition-transform duration-300 transform hover:scale-110 ${
                displayModalUpdateOrDelete ? "bg-transparent" : "block"
              } `}
              onClick={() => {
                handleClickTaskUpdateOrDelete(displayModalUpdateOrDelete);
              }}
            >
              <GrAppsRounded />
            </div>
          </div>
          <p className={`w-1/4 text-lg  text-center font-medium p-0   tablet:text-xl line-clamp-1`} >
            {title}
          </p>
          <p className={`w-1/4 text-lg   text-center font-medium p-0  tablet:tablet:text-xl `}>
            {categ}
          </p>
          <button
            className={`w-1/4 text-lg  text-center font-medium  $tablet:text-xl  border-0 p-0 m-0 hover:border-transparent focus:outline-none  text-sky-400 transition-transform duration-300 transform hover:scale-110 `}
            onClick={() => {
              handClickTaskDescription();
            }}
          >
            descrição
          </button>
        </div>
        {descriptionTaskModal && <TextModal content={description} />}

        <div
          className={`rounded w-44 bg-sky-900 h-24  flex flex-col p-2 justify-center items-center gap-2  bottom-36 left-auto  relative tablet:left-auto ${
            displayModalUpdateOrDelete === false ? "hidden" : "block"
          } `}
        >
          <ButtonAction
            width="full"
            lgWidth="64"
            height=""
            lgHeight=""
            functionAction={() => {
              setUpdateTaskModal(true);
            }}
          >
            atualizar
          </ButtonAction>
          <button
            className="w-full
      lg:w-full bg-red-600 text-center flex flex-col justify-center items-center" onClick={()=>{deleteTask(idTask), setDisplayModalUpdateOrDelete(false)}}
          >
            <FaTrash />
          </button>
        </div>
      </IntialTransformAnimation>

      {updateTaskModal && (
        <ModalUpdateTask
          idTask={idTask}
          setState={setUpdateTaskModal}
          objectTask={objectTaskId}
          functionApi={apiUpdateTask}
          setDisplayModalUpdateOrDelete={setDisplayModalUpdateOrDelete}
        />
      )}
    </li>
  );
};
