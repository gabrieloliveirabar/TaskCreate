import { ReactNode } from "react";
import { OptionSelectTag } from "./option";

interface ISelectTagModal {
  register: any;
  errors: any;
  name: string;
  label: string;
  children: ReactNode;
  value?:string
}

export const SelectTagModal = ({
  register,
  errors,
  name,
  label,
  children,
}: ISelectTagModal) => {
  return (
    <>
      <label htmlFor={name} className="w-52 mt-2 text-lef tablet:w-full">
        {label}
      </label>
      <select
        className="text-white text-lg font-normal w-52 h-8 pl-2 rounded b-none cursor-pointer bg-input_background shadow-md shadow-black focus:outline-slate-50  tablet:w-full  lg:h-10"
        name={name} 
        {...register(name)}
        
      >
        {children}
      </select>
      {errors[name] && <span>{errors[name].message}</span>}
    </>
  );
};
