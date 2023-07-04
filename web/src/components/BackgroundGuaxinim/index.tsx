import guaxinim from "../../assets/guaxinim.svg";

export const BackgroundGuaxinim = () => {
  return (
    <div
      className=" bg-cover bg-center absolute bg-opacity-95 inset-x-0 bottom-0 max-w-md m-auto h-full tablet:hidden  "
      style={{ backgroundImage: `url(${guaxinim})`, opacity: 0.2 }}
    ></div>
  );
};
