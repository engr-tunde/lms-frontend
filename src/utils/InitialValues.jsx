// export const addInputValue = (itemData) => {
//     console.log(itemData)
//     const initialValues = {
//         fullName: itemData ? itemData.fullName : "",
//         emailAddress:itemData ? itemData.emailAddress: "",
//         firstName: itemData ? itemData.firstName: "",
//         lastName: itemData ? itemData.lastName  : "",
//         phoneNumber: itemData ? itemData.phoneNumber : "",
//         password: itemData ? itemData.password : "",
//         confirmPassword: itemData ? itemData.confirmPassword : "",
//     }
//     return initialValues;
// }

export const loginUserValues = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  return initialValues;
};

export const registerUserValues = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  return initialValues;
};
