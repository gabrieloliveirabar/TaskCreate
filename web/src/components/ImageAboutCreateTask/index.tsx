import { BsPlusCircleFill } from "react-icons/bs";
import { ModalCreateTask } from "../../components/Modals/ModalCreateTask";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
export const ImageAboutCreateTask = () => {
  const { setCreateTaskModal, createTaskModal } = useContext(TaskContext);

  return (
    <div className="flex justify-center items-center w-80 h-24 tablet:h-48 tablet:w-96 lg:w-auto">
      <div className="flex flex-col justify-center gap-8 items-center h-full w-full lg:items-end">
        <h2 className="w-full text-right font-sans text-xl tablet:text-2xl">
          Crie sua primeira{" "}
          <button
            className="text-sky-800 border-0 p-0 m-0 hover:border-transparent focus:outline-none transition-transform duration-300 transform hover:scale-110"
            onClick={() => setCreateTaskModal(true)}
          >
            tarefa
          </button>
        </h2>
        <div
          className="flex justify-around items-center w-60 h-9 bg-input_background rounded p-2 tablet:h-12 tablet:w-64 lg:w-80  cursor-pointer transition-transform duration-300 transform hover:scale-110"
          onClick={() => setCreateTaskModal(true)}
        >
          <div className="w-10/12 flex justify-center items-center">
            <p className="text-lg tablet:text-2xl  ">crie aqui</p>
          </div>
          <div className="flex justify-end items-center h-full tablet:w-10">
            <BsPlusCircleFill />
          </div>
        </div>
      </div>
      <div>
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="88"
          height="88"
          viewBox="0 0 88 78"
          fill="none"
          className="w-24 p-0 tablet:w-32 "
        >
          <path
            d="M24.089 13.9585C32.0949 15.7831 38.8912 18.8986 44.4777 23.3049C50.0642 27.7112 53.5371 32.7227 54.8964 38.3391C55.9081 42.5198 55.5884 46.535 53.9371 50.3846C52.2858 54.2343 49.4342 57.5712 45.3823 60.3954L60.6255 59.7253L61.5453 63.5259L36.3529 64.6335L32.1219 47.1506L37.5985 46.9098L40.3425 58.2484C44.1111 55.778 46.796 52.8325 48.3974 49.4119C49.9988 45.9912 50.3446 42.4017 49.4351 38.6433C48.3313 34.0825 45.598 29.9668 41.235 26.2963C36.872 22.6257 31.4939 19.9067 25.1008 18.1392L24.089 13.9585Z"
            fill="white"
          />
        </svg>
        {createTaskModal && <ModalCreateTask />}
      </div>
    </div>
  );
};
