interface IInputModal {
  register: any;
  errors: any;
  name: string;
  label: string;
  placeHolder: string;
  width: any;
  lgWidth: string;
  height: any;
  value?: string
}
export const TextArea = ({
  register,
  errors,
  name,
  label,
  placeHolder,
  width,
  lgWidth,
  height,
  value
}: IInputModal) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <textarea
        name={name}
        {...register(name)}
        id=""
        cols={30}
        rows={10}
        placeholder={value==undefined?placeHolder:value}
        className={`text-white text-lg text-left  pl-2 font-normal w-${width} h-${height}  rounded b-none bg-input_background caret-zinc-50 shadow-md shadow-black focus:outline-slate-50  tablet:w-full lg:w-${lgWidth} `}
      ></textarea>
      {errors[name] && <span>{errors[name].message}</span>}
    </>
  );
};
