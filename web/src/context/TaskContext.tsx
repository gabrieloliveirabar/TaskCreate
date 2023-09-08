import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { IApiTaskRegister } from "../interfaces/task";
import apiTaskRegister from "../services/tasks/registeTasksApi";
import { notify, toastError, toastSuccess } from "../components/ToastConfig";
import api from "../services/api";
import taskUpdateApi from "../services/tasks/updateTasksApi";
import deleteTaskApi from "../services/tasks/deleteTaskApi";

interface ITaskProvider {
  children: ReactNode;
}
type TaskType = {
  /* define your task properties here */
};

export interface ITaskContext {
  setCreateTaskModal: Dispatch<SetStateAction<boolean>>;
  createTaskModal: boolean;
  registerTaskApi: (data: IApiTaskRegister) => Promise<number>;
  notify: (status: number, messageSucess: string, messageError: string) => void;
  tasks: Array<any>;
  setTasks: Dispatch<SetStateAction<Array<TaskType>>>;
  handlePrevPage: () => void;
  handleNextPage: () => void;
  typeCategorie: (catgorie: string) => string;
  apiUpdateTask: (data: any, id: string) => Promise<number | void>;
  deleteTask: (id: string) => void;
  setFilter: Dispatch<SetStateAction<string>>;
}

export const TaskContext = createContext<ITaskContext>({} as ITaskContext);

export const TaskProvider = ({ children }: ITaskProvider) => {
  const [createTaskModal, setCreateTaskModal] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [tasks, setTasks] = useState<Array<any>>([]);
  const [filter, setFilter] = useState<string>("");

  const token = window.localStorage.getItem("@TOKEN");
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
  const registerTaskApi = async (data: IApiTaskRegister): Promise<number> => {
    const res = await apiTaskRegister(data);

    return res!;
  };
  const apiUpdateTask = async (data: any, id: string) => {
    const res = await taskUpdateApi(data, id);
    return res;
  };
  const deleteTask = async (id: string) => {
    const res = await deleteTaskApi(id);

    if (res === 204) {
      {
        return toastSuccess("tarefa deletada");
      }
    }
  };

  const handleNextPage = () => {
    if (currentPage < tasks.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    const fechTask = async () => {
      if (currentPage >= 1) {
        const page = String(currentPage);
        try {
          const { data } = await api.get(`tasks/${page}?filter=${filter}`);
          setTasks(data);
        } catch (err) {
          console.log(err);
        }
      }
    };
    fechTask();
  }, [currentPage, filter, tasks]);

  const typeCategorie = (categorie: string) => {
    let typeCateg = "";
    if (categorie === "health") {
      return (typeCateg = "saúde");
    } else if (categorie === "exercise") {
      return (typeCateg = "exercício");
    } else if (categorie === "work") {
      return (typeCateg = "trabalho");
    }

    return typeCateg;
  };

  return (
    <TaskContext.Provider
      value={{
        setCreateTaskModal,
        createTaskModal,
        registerTaskApi,
        notify,
        handlePrevPage,
        handleNextPage,
        tasks,
        typeCategorie,
        apiUpdateTask,
        deleteTask,
        setTasks,
        setFilter,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
