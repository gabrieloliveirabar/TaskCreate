import { BsPlusCircleFill } from "react-icons/bs";
export const ImageAboutCreateTask = () => {
  return (
    <div className="flex justify-center items-center w-72 h-24 ">
      <div className="flex flex-col justify-around items-center h-full w-full">
        <h2 className="w-full text-right font-sans text-lg">
          Crie sua primeira{" "}
          <a href="#" className="text-sky-800">
            tarefa
          </a>
        </h2>
        <div className="flex justify-around items-center w-56 h-9 bg-input_background rounded ">
          <div className="w-10/12 flex justify-center items-center">
            <p className="text-lg  ">crie aqui</p>
          </div>
          <div className="flex justify-end ">
            <BsPlusCircleFill />
          </div>
        </div>
      </div>
      <div>
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="88"
          height="78"
          viewBox="0 0 88 78"
          fill="none"
        >
          <path
            d="M24.089 13.9585C32.0949 15.7831 38.8912 18.8986 44.4777 23.3049C50.0642 27.7112 53.5371 32.7227 54.8964 38.3391C55.9081 42.5198 55.5884 46.535 53.9371 50.3846C52.2858 54.2343 49.4342 57.5712 45.3823 60.3954L60.6255 59.7253L61.5453 63.5259L36.3529 64.6335L32.1219 47.1506L37.5985 46.9098L40.3425 58.2484C44.1111 55.778 46.796 52.8325 48.3974 49.4119C49.9988 45.9912 50.3446 42.4017 49.4351 38.6433C48.3313 34.0825 45.598 29.9668 41.235 26.2963C36.872 22.6257 31.4939 19.9067 25.1008 18.1392L24.089 13.9585Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};
