import { IUser } from "../../interfaces/user";
import { FaPen } from "react-icons/fa";
import { Dispatch, SetStateAction } from "react";
import { ToastContainer } from "react-toastify";

interface IDescriptionAllUser {
  objectAllUser: IUser;
  setOpenModalUpdateUser: Dispatch<SetStateAction<boolean>>;
  setOpenModalUpdateAddress: Dispatch<SetStateAction<boolean>>;
}
export const DescriptionAllUser = ({
  objectAllUser,
  setOpenModalUpdateUser,
  setOpenModalUpdateAddress,
}: IDescriptionAllUser) => {
  return (
    <div
      className="h-96 w-72 shadow-2xl flex flex-col justify-between items-center tablet:w-2/3 tablet:h-2/3
              "
    >
      <div className=" flex flex-col justify-center   rounded shadow-lg shadow-sky-800 bg-sky-900 w-full h-full p-2 gap-5">
        <div className=" flex flex-col justify-center items-center  ">
          <div className="flex justify-center items-center gap-1 ">
            <h3 className="text-center font-sans font-semibold text-xl px-2 tablet:text-4xl">
              Dados
            </h3>
            <button
              className="flex justify-center items-center border-0 p-0 m-0 hover:outline-none hover:scale-110 focus:outline-none w-3 tablet:w-11  "
              onClick={() => {
                setOpenModalUpdateUser(true);
              }}
            >
              <FaPen style={{ color: "rgb(3 105 161)" }} />
            </button>
          </div>
          <div className="w-full flex justify-around items-center font-sans font-medium text-xl px-0  tablet:text-4xl ">
            <p>{objectAllUser.name}</p>
            <p>
              {objectAllUser.datebirth.replace(
                /^(\d{2})(\d{2})(\d{4})$/,
                "$1/$2/$3"
              )}
            </p>
          </div>
          <div className="w-full flex justify-around items-center font-sans font-medium text-xl px-2  tablet:text-4xl">
            <p>{objectAllUser.email}</p>
          </div>
        </div>
        <div className=" flex flex-col  gap-2">
          <div className="flex justify-center items-center gap-1">
            <h3 className="text-center font-sans font-semibold text-xl px-2 tablet:text-4xl">
              Endereço
            </h3>
            <button
              className="flex justify-center items-center border-0 p-0 m-0 hover:outline-none hover:scale-110 focus:outline-none  w-3 tablet:w-11"
              onClick={() => setOpenModalUpdateAddress(true)}
            >
              <FaPen style={{ color: "rgb(3 105 161)" }} />
            </button>
          </div>
          <ToastContainer/>
          <div className="w-full flex justify-around items-center font-sans font-medium text-xl px-2 tablet:text-4xl ">
            <p className="line-clamp-1 w-1/2">{objectAllUser.address.city}</p>
            <p>{objectAllUser.address.state}</p>
          </div>
          <div className="w-full flex justify-around items-center font-sans font-medium text-xl px-2 tablet:text-4xl  ">
            <p className="line-clamp-1 w-1/2">{objectAllUser.address.street}</p>
            <p>{objectAllUser.address.number}</p>
          </div>
          <p className="text-center font-sans font-medium text-xl px-2 tablet:text-4xl">
            {objectAllUser.address.postalCode}
          </p>
        </div>
        <div className="w-full flex flex-col justify-end items-center mt-6 font-sans font-bold text-xl px-2 tablet:text-4xl">
          <p>Total de tasks concluidas</p>
          <p>{ }</p>
        </div>
      </div>
    </div>
  );
};
