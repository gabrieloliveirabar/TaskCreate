import { useState, useEffect } from "react";
import { useMedia } from "react-use";

import { Header } from "../../components/Header";
import background_image from "../../assets/background_image.svg";
import { Button } from "../../components/button";
import { Footer } from "../../components/Footer";

export const Home = () => {
  const [isNotebook, setIsNotebook] = useState(false);
  const isNotebookSize = useMedia("(min-width:1024px)");

  useEffect(() => {
    setIsNotebook(isNotebookSize);
  }, [isNotebookSize]);

  return (
    <div className="h-full">
      <Header />
      <div className="flex-grow justify-center items-center h-5/6 p-3  ">
        <div className="flex-col justify-center h-4/5 ">
          <div>
            {isNotebook ? (
              <div>
                <h1>Você precisa se organizar?</h1>
                <p>
                  O TaskCreate veio para te ajudar a se organizar com a criação
                  de tarefas!
                </p>
                <p>
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
              <div className="h-full  w-full flex-col gap-3">
                <h1 className="mb-2 text-2xl  ">Você precisa se organizar?</h1>
                <p className="mb-5">
                  O TaskCreate veio para te ajudar a se organizar com a criação
                  de tarefas!
                </p>
              </div>
            )}
          </div>
          <figure className=" flex justify-center items-center">
            <img src={background_image} alt="" />
          </figure>
        </div>
        <div className="flex-col justify-center items-center">
          <div className="gap-1 flex justify-center items-center">
            <Button>cadastrar</Button>
          </div>
          <p className="text-center">
            já tem cadastro? faça o{" "}
            <a href="" className="text-blue-600">
              Login
            </a>
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
