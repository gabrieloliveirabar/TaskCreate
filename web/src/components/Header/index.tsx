import logo from "../../assets/logo.svg";
import { TfiMenu } from "react-icons/tfi";
import { useState } from "react";
export const Header = () => {
  const [display, setDisplay] = useState(false);

  const HandleMenuClick = () => {
    setDisplay(!display);
  };
  return (
    <div className="w-screen  flex p-3  m-0 bg-header_background">
      <nav className="w-screen flex justify-between items-center p-[5px] rounded-b-lg">
        <figure className="">
          <img src={logo} alt="Logo" />
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
            <li><a href="" className="p-0 text-base font-medium text-white border border-transparent no-underline hover:border-y-white">Login</a></li>
            <li className=""><a href="" className="p-0 text-base font-medium text-white border border-transparent no-underline hover:border-y-white">Register</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
