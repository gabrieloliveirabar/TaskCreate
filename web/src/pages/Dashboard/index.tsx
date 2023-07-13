import FadeInAnimation from "../../components/Animation/FadeInAnimation";
import { Header } from "../../components/Header";
import headGuaxinim from "../../assets/cabecaGuaxinim.svg";
import { ImageAboutCreateTask } from "../../components/ImageAboutCreateTask";

export const Dashboard = () => {
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
            <div className="flex flex-col justify-start  items-center h-full p-4">
              <div
                className="bg-cover bg-center absolute  inset-x-0 bottom-0  max-w-md m-auto h-80 tablet:"
                style={{
                  backgroundImage: `url(${headGuaxinim})`,
                  opacity: 0.9,
                }}
              ></div>
              <div className="mb-5 mt-10">
                <p className="font-sans text-xl line-clamp-3 ">
                  Você ainda não terminou seu cadastro, para completar, acesse o
                  seu{" "}
                  <a href="#" className="text-sky-800">
                    {" "}
                    Perfil
                  </a>{" "}
                  e informe seu endereço.
                </p>
              </div>
              <ImageAboutCreateTask />
            </div>
          </div>
        </div>
      </FadeInAnimation>
    </div>
  );
};
