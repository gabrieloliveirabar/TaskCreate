import { ReactNode } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { IApiLogin } from "../../services/apiLogin";

interface IForm {
  children: (props: { register: any; errors: any }) => ReactNode;
  onSubmit: (data:object)=>void;
}

export const Form = ({ children, onSubmit }: IForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({});

  const handleFormSubmit = (data: object) => {
    onSubmit(data);
  };
  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col justify-center items-center w-56 "
    >
      {children({ register, errors })}
     
    </form>
  );
};
