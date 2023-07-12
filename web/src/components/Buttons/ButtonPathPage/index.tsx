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
      className={`p-2 w-${width} mt-3 text-xl bg-button_background font-medium lg:w-${lgWidth}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
