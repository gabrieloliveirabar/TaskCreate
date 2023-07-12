import { ReactNode } from "react";

export interface IButton {
  children: ReactNode;
  width: string;
  lgWidth: string;
}

export const ButtonAction = ({ children, width, lgWidth }: IButton) => {
  return (
    <button
      type="submit"
      className={`p-2 w-${width} mt-3 text-xl bg-button_background font-medium lg:w-${lgWidth}`}
    >
      {children}
    </button>
  );
};
