import FadeInAnimation from "../../components/Animation/FadeInAnimation";
import { Header } from "../../components/Header";
import headGuaxinim from "../../assets/cabecaGuaxinim.svg";
import { ImageAboutCreateTask } from "../../components/ImageAboutCreateTask";
import { ToastContainer } from "react-toastify";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { ButtonAction } from "../../components/Buttons/ButtonAction";
import { TaskContext } from "../../context/TaskContext";
import { Task } from "../../components/Task";
import { motion } from "framer-motion";

import { ModalCreateTask } from "../../components/Modals/ModalCreateTask";
import { useNavigate, redirect } from "react-router-dom";

export const Dashboard = () => {
  const { userObject } = useContext(UserContext);
  const navigate = useNavigate();
  const {
    handleNextPage,
    handlePrevPage,
    tasks,
    setTasks,
    setCreateTaskModal,
    createTaskModal,
    setFilter,
  } = useContext(TaskContext);
  const [upImage, setUpImage] = useState<boolean>(false);
  const userAdressObject = userObject.address || null;

  return (
    <div>
      <FadeInAnimation>
        <div className="relative">
          <div className=" h-screen z-10 flex flex-col">
            <Header
              arrayLinks={[
                { name: "Profile", redirectTo: "/profile" },
                { name: "Sobre", redirectTo: "/about" },
                { name: "Sair", redirectTo: "/" },
              ]}
            />
            <div className="flex flex-col justify-start items-center h-full p-4 tablet:flex-row">
              <div className="flex flex-col justify-center items-center w-full ">
                {userAdressObject == null ? (
                  <div className="mb-5 mt-10 w-full">
                    <p className="font-sans text-xl w-full text-left tablet:text-4xl ">
                      Você ainda não terminou seu cadastro, para completar,
                      acesse o seu{" "}
                      <button
                        className="text-sky-800 border-0 p-0 m-0 hover:outline-none hover:scale-110 focus:outline-none"
                        onClick={() => {
                          navigate("/profile");
                        }}
                      >
                        Perfil
                      </button>{" "}
                      e informe seu endereço.
                    </p>
                  </div>
                ) : (
                  <div></div>
                )}

                {tasks.length >= 1 ? (
                  <div className=" w-full h-60 tablet:h-96">
                    <div className=" w-full h-full flex flex-col justify-start items-center gap-1 tablet:w-1/2  tablet:gap-3 ">
                      <div className="w-full h-12 rounded bg-header_background">
                        <nav className="w-full h-full">
                          <ul className="flex justify-around items-center  w-full h-full py-5 px-1 tablet:px-2 gap-2  tablet:justify-between  ">
                            <li className="h-8 w-1/4  rounded text-center ">
                              <ButtonAction
                                width="full"
                                lgWidth=""
                                height="full"
                                lgHeight="3"
                                functionAction={() => {
                                  setFilter(" ");
                                }}
                              >
                                todos
                              </ButtonAction>
                            </li>
                            <li className="h-8 w-1/4  rounded text-center  ">
                              <ButtonAction
                                width="full"
                                lgWidth="full"
                                height="full"
                                lgHeight="3"
                                functionAction={() => {
                                  setFilter("health");
                                }}
                              >
                                saúde
                              </ButtonAction>
                            </li>
                            <li className="h-8 w-1/4  rounded text-center ">
                              <ButtonAction
                                width="full"
                                lgWidth=""
                                height="full"
                                lgHeight="3"
                                functionAction={() => {
                                  setFilter("exercise");
                                }}
                              >
                                exercício
                              </ButtonAction>
                            </li>
                            <li className="h-8 w-1/4  rounded text-center ">
                              <ButtonAction
                                width="full"
                                lgWidth=""
                                height="full"
                                lgHeight="3"
                                functionAction={() => {
                                  setFilter("work");
                                }}
                              >
                                trabalho
                              </ButtonAction>
                            </li>
                          </ul>
                        </nav>
                      </div>
                      <div className=" w-full h-full">
                        <ul className="w-full mb-2  flex flex-col justify-start items-center gap-3">
                          {tasks.map((elem, id, array) => {
                            if (elem.status === true) {
                              return (
                                <Task
                                  title={elem.title}
                                  categorie={elem.categorie}
                                  description={elem.description}
                                  framerX={id}
                                  idTask={elem.id}
                                />
                              );
                            }
                          })}
                        </ul>
                        <ButtonAction
                          lgWidth="full"
                          width="full"
                          functionAction={() => {
                            setCreateTaskModal(true);
                          }}
                          height="10"
                          lgHeight=""
                        >
                          criar
                        </ButtonAction>
                        {createTaskModal && <ModalCreateTask />}
                        <div className="  flex justify-center items-center gap-4 mt-2">
                          <ButtonAction
                            functionAction={handlePrevPage}
                            width="24"
                            height="10"
                            lgHeight="10"
                            lgWidth="24"
                          >
                            anterior
                          </ButtonAction>
                          <ButtonAction
                            functionAction={handleNextPage}
                            width="24"
                            height="10"
                            lgHeight="10"
                            lgWidth="24"
                          >
                            próximo
                          </ButtonAction>
                        </div>
                      </div>
                      <ToastContainer />
                    </div>
                  </div>
                ) : (
                  <div className="w-full flex justify-center items-center tablet:justify-start">
                    <ImageAboutCreateTask />
                  </div>
                )}
              </div>
            </div>

            <div
              className={`${
                upImage
                  ? "absolute h-screen w-screen  duration-700   bg-black bg-opacity-75"
                  : ""
              }   `}
            >
              <div
                className={` bg-cover bg-center absolute  left-0 right-0 ${
                  upImage ? "bottom-0 " : "-bottom-20 "
                }  max-w-md cursor-pointer  m-auto h-64 tablet:left-96 tablet:right-0 tablet:bottom-0 tablet:h-64 lg:left-2/4`}
                style={{
                  backgroundImage: `url(${headGuaxinim})`,
                  opacity: 1,
                }}
                onClick={() => {
                  upImage ? setUpImage(false) : setUpImage(true);
                }}
              ></div>
            </div>
          </div>
        </div>
      </FadeInAnimation>
    </div>
  );
};
