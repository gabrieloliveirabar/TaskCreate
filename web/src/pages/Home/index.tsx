import { useState, useEffect } from "react";
import { useMedia } from "react-use";

import { Header } from "../../components/Header";
import background_image from "../../assets/background_image.svg";
import { Button } from "../../components/button";
import { Footer } from "../../components/Footer";

export const Home = () => {
  const [isNotebook, setIsNotebook] = useState(false);
  const isNotebookSize = useMedia("(min-width:771px)");

  useEffect(() => {
    setIsNotebook(isNotebookSize);
  }, [isNotebookSize]);

  return (
    <div className="h-screen">
      <Header />
      <div className="flex-col justify-center items-center h-5/6 w-screen p-3  ">
        <div className="  h-4/5 md:flex md:justify-center md:items-center">
          <div className="flex w-full">
            {isNotebook || isNotebookSize  ? (
              <div className="flex-col w-full h-full  md:w-3/5 ">
                <h1 className="mb-1  ">Você precisa se organizar?</h1>
                <p>
                  O TaskCreate veio para te ajudar a se organizar com a criação
                  de tarefas!
                </p>
                <p className="line-clamp-2 " >
                  O objetivo é claro e simples, nós não temos uma rotina, isso
                  nos levar a procastinar, que por sua vez nos torna menos
                  criativo, o que pode afetar até a nossa saúde.
                </p>
                <p>
                  Pense, se extisse um site que poderia te ajudar a criar
                  rotinas através de tarefas, bom o pensamento se tornou
                  realidade!
                </p>
              </div>
            ) : (
                <div className="h-full  w-full  justify-center items-center
               gap-3">
                <h1 className="mb-2 text-2xl text-start ">Você precisa se organizar?</h1>
                <p className="mb-5 text-start">
                  O TaskCreate veio para te ajudar a se organizar com a criação
                  de tarefas!
                </p>
              </div>
            )}
          </div>
          <figure className=" flex justify-center items-center p-0 w-full md:w-1/2 ">
            <img src={background_image} alt=""  className=" h-64 tablet:h-72 md:h-96 w-full" />
          </figure>
        </div>
        <div className="flex-col justify-center items-center md:mt-1">
          <div className="gap-1 flex justify-center items-center mt-2  md:justify-start">
            <Button >cadastrar</Button>
          </div>
          <p className="text-center md:text-start">
            já tem cadastro? faça o{" "}
            <a href="" className="text-blue-600">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
