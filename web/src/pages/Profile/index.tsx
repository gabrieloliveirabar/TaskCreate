import { useState, useEffect, useContext } from "react";
import FadeInAnimation from "../../components/Animation/FadeInAnimation";
import { Header } from "../../components/Header";
import api from "../../services/api";
import apiAddressRegister from "../../services/address/apiAddressRegister";
import { IAddressRequest } from "../../interfaces/address";
import { IUser } from "../../interfaces/user";
import { AddressRegister } from "../../components/AddressRegister";
import { DescriptionAllUser } from "../../components/DescriptionAllUser";
import { ModalUpdateUser } from "../../components/Modals/ModalUpdateUser";
import { ModalUpdateAddress } from "../../components/Modals/ModalUpdateAddress";
import { UserContext } from "../../context/UserContext";

export const Profile = () => {
  const [render, setRender] = useState<boolean>(false);
  const [objectAllUser, setObjectAllUser] = useState({} as IUser);
  const [openModalUpdateUser, setOpenModalUpdateUser] =
    useState<boolean>(false);
  const [openModalUpdateAddress, setOpenModalUpdateAddress] =
    useState<boolean>(false);
  const { userObject } = useContext(UserContext);

  const onSubmitFunction = async (data: IAddressRequest) => {
    const res = await apiAddressRegister(data);
    if (res.status === 201) {
      setRender(true);
    }
  };
  const addres = async () => {
    const id = window.localStorage.getItem("@USERID");
    const adressData = await api.get(`users/${id}`);
    if (adressData.data.address) {
      setRender(true);
      setObjectAllUser(adressData.data);
    }
  };
  useEffect(() => {
    addres();
  }, []);

  return (
    <FadeInAnimation>
      <div
        className="w-screen h-screen flex flex-col justify-center items-start
      "
      >
        <Header
          arrayLinks={[
            { name: "inicio", redirectTo: "/dashboard" },
            { name: "Sobre", redirectTo: "/about" },
            { name: "Sair", redirectTo: "/" },
          ]}
        />
        <div className="w-screen h-screen bg-gradient-to-r from-sky-900 to-sky flex flex-col-reverse justify-center items-center tablet:flex-row">
          <div className=" bg-transparent w-full h-full flex  justify-center items-center m-0 p-0">
            {render ? (
              <DescriptionAllUser
                objectAllUser={objectAllUser}
                setOpenModalUpdateUser={setOpenModalUpdateUser}
                setOpenModalUpdateAddress={setOpenModalUpdateAddress}
              />
            ) : (
              <AddressRegister onSubmitFunction={onSubmitFunction} />
            )}
          </div>
          {openModalUpdateUser && (
            <ModalUpdateUser
              objectUser={objectAllUser}
              setState={setOpenModalUpdateUser}
              idUser={objectAllUser.id}
              setOpenModalUpdateUser={setOpenModalUpdateUser}
            />
          )}
          {openModalUpdateAddress && (
            <ModalUpdateAddress
              setState={setOpenModalUpdateAddress}
              setOpenModalUpdateAddress={setOpenModalUpdateAddress}
              objectAddress={objectAllUser.address}
              idAddress={objectAllUser.address.id}
            />
          )}
        </div>
      </div>
    </FadeInAnimation>
  );
};

// h-full w-1/2 bg-sky-900
