import { toast } from "react-toastify";

export const toastSuccess = (message: string) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });
};

export const toastError = (message: string) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });
};

export const notify = (
  status: number,
  messageSucess: string,
  messageError: string
) => {
  if (status !== 201 || status === null) {
    return toastError(messageError);
  } else {
    toastSuccess(messageSucess);
  }
};
