import { ReactNode } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../Button";

interface IForm {
  children: (props: { register: any; errors: any }) => ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
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
      <Button width="52" lgWidth="96">Cadastrar</Button>
    </form>
  );
};
