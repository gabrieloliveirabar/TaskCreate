import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export interface IButton {
  children: ReactNode;
  width: string;
  lgWidth: string;
  pathPage: string;
}

export const ButtonPathPage = ({
  children,
  width,
  lgWidth,
  pathPage,
}: IButton) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(pathPage);
  };
  return (
    <button
      type="submit"
      className={`p-1 w-${width} h-8 mt-3 text-lg  tablet:text-2xl text-center  flex justify-center items-center border-hidden bg-button_background font-medium hover:outline-white focus:outline-white lg:w-${lgWidth}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
