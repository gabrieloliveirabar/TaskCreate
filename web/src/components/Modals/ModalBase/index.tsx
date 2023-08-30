import { ReactNode } from "react";
import ReactModal from "react-modal";
import { motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "../../../styles/talwind.css";
import "react-toastify/dist/ReactToastify.css";

interface IModalBase {
  children: ReactNode;
  title: string;
  isOpen: boolean;
  setIs: (arg0: boolean) => void;
}

export const ModalBase = ({ children, title, isOpen, setIs }: IModalBase) => {
  const closeModal = () => {
    setIs(false);
  };

  return (
    <div className="modal-container">
      <ReactModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Exemplo de Modal"
        ariaHideApp={false}
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
        className=" modal-content bg-input_background rounded p-1 w-80  h-96 m-auto mt-28  text-gray-50  border-none border-transparent tablet:w-1/2 tablet:h-2/4 "
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.7 }}
          transition={{ duration: 0.5 }}
        >
          <ToastContainer />
          <div className="flex flex-col justify-start items-center p-1 w-full h-full">
            <div className=" flex justify-between items-center w-full">
              <h2 className=" text-2xl ">{title}</h2>
              <button
                className="text-2xl text-right m-0 p-0 border-none  cursor-pointer hover:text-slate-800 hover:border-transparent focus:outline-none"
                onClick={() => closeModal()}
              >
                X
              </button>
            </div>
            {children}
          </div>
        </motion.div>
      </ReactModal>
    </div>
  );
};
