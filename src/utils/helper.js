import { toast } from "react-toastify";

export const successMessage = (message) => {
  return toast.success(message);
};
export const errorMessage = (message) => toast.error(message);
export const infoMessage = (message) => toast.info(message);

export const currencyFormatter = (amount) => {
  const fm = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return fm.format(amount);
};
