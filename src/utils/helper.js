import { toast } from "react-toastify";

export const successMessage = (message) => {
  return toast.success(message);
};
export const errorMessage = (message) => toast.error(message);
export const infoMessage = (message) => toast.info(message);