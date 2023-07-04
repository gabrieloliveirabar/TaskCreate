interface IInput {
  register: any;
  errors: any;
  name: string;
  label: string;
  placeHolder: string;
}

export const Input = ({
  register,
  errors,
  name,
  label,
  placeHolder,
}: IInput) => {
  return (
    <>
      <label htmlFor={name} className="w-52 mt-2 text-lef lg:w-96">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeHolder}
        {...register(name)}
        className="text-white text-xs font-normal w-52 h-8 pl-2 rounded b-none bg-input_background shadow-md shadow-black focus:b-none lg:w-96 lg:h-10"
      />
      {errors[name] && <span>{errors[name].message}</span>}
    </>
  );
};
