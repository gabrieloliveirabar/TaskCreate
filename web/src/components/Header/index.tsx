import logo from "../../assets/logo.svg";
import { TfiMenu } from "react-icons/tfi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ILinks {
  name: string;
  redirectTo: string;
}
interface IHeader {
  arrayLinks: Array<ILinks>;
}

export const Header = ({ arrayLinks }: IHeader) => {
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();

  const clearStorageFunction = (name: string) => {
  
    if (name === "Sair") {
      window.localStorage.clear();
    }
  };

  const HandleMenuClick = () => {
    setDisplay(!display);
  };
  return (
    <div className="w-screen h-9 flex p-3  m-0 bg-header_background">
      <nav className="w-screen flex justify-between items-center p-[5px] rounded-b-lg">
        <figure className="">
          <img
            src={logo}
            alt="Logo"
            onClick={() => navigate("/")}
            className="cursor-pointer"
          />
        </figure>
        <label
          htmlFor="toggle"
          className={`${!display ? "block" : "hidden"} md:hidden`}
          onClick={HandleMenuClick}
        >
          <TfiMenu />
        </label>
        <div
          className={`max-sm:w-fullw ${display ? "block" : "hidden"} md:block`}
        >
          <ul onClick={HandleMenuClick} className=" flex gap-2">
            {arrayLinks.map((elem, i) => (
              <li key={i}>
                <a
                  href={elem.redirectTo}
                  className="p-0 text-base font-medium text-white border border-transparent no-underline hover:border-y-white"
                  onClick={() => clearStorageFunction(elem.name)}
                >
                  {elem.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
