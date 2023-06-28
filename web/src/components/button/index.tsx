import {  ReactNode} from "react";


export interface IButton {
    children: ReactNode;
    
  }

export const Button = ({children}:IButton) => {
  return (
    <button type="submit" className="p-3 w-60 text-xl bg-button_background font-medium  ">
      {children}
    </button>
  );
};
