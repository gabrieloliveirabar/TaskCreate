import FadeInAnimation from "../../components/Animation/FadeInAnimation";
import { BackgroundGuaxinim } from "../../components/BackgroundGuaxinim";
import { Header } from "../../components/Header";

export const Dashboard = () => {
  return (
    <div>
      <FadeInAnimation>
        <BackgroundGuaxinim />
        <div className="relative">
          <div className=" h-screen z-10 flex flex-col">
            <Header
              arrayLinks={[
                { name: "Profile", redirectTo: "/profile" },
                { name: "Sobre", redirectTo: "/about" },
                { name: "Sair", redirectTo: "/" },
              ]}
            />
            <div>
                          
            </div>
          </div>
        </div>
      </FadeInAnimation>
    </div>
  );
};
