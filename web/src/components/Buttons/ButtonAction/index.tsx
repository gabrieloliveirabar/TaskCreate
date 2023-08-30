import { ReactNode } from "react";

export interface IButton {
  children: ReactNode;
  width: string;
  lgWidth: string;
  height: string;
  lgHeight: string;
  functionAction: () => void | Promise<void>;
}

export const ButtonAction = ({
  children,
  width,
  lgWidth,
  height,
  lgHeight,
  functionAction,
}: IButton) => {
  const handleClick = () => {
    functionAction();
  };

  return (
    <button
      type="submit"
      className={`p-1 w-${width} h-${height} text-lg  tablet:text-2xl text-center  flex justify-center items-center border-hidden bg-button_background font-medium hover:outline-white focus:outline-white lg:w-${lgWidth} lg:h-${lgHeight}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
