interface IInputModal {
  register: any;
  errors: any;
  name: string;
  label: string;
  placeHolder: string;
  width: any;
  lgWidth: string;
  height: any;
}
export const InputTagModal = ({
  register,
  errors,
  name,
  label,
  placeHolder,
  width,
  lgWidth,
  height,
}: IInputModal) => {
  return (
    <>
      <label htmlFor={name} className="w-52 text-left tablet:w-full ">
        {label}
      </label>
      <input
        type="text"
        className={`text-white text-lg text-left  pl-2 font-normal w-${width} h-${height}  rounded b-none bg-input_background shadow-md shadow-black focus:outline-slate-50  tablet:w-full lg:w-${lgWidth} `}
        placeholder={placeHolder}
        {...register(name)}
      />
      {errors[name] && <span>{errors[name].message}</span>}
    </>
  );
};
