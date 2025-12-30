import * as yup from "yup";
export const validateInputValue = () => {
  const validationSchema = yup.object({
    fullName: yup.string().required("full name is required"),
    emailAddress: yup
      .string()
      .email("invalid email address")
      .required("Email is required"),
    firstName: yup.string().required("first name is required"),
    lastName: yup.string().required("last name is required"),
    phoneNumber: yup
      .number("Must be a number")
      .required("phone number is required"),
    password: yup
      .string()
      .required("password is required")
      .min(8, "passwordmust be at least 8 character long")
      .matches(/[a-z]+/, "password must contain at least one lower case letter")
      .matches(/[A-Z]+/, "password must contain at least one Upper case letter")
      .matches(/\d+/, "password must contain at least one number")
      .matches(
        /[@$!%#*?&]+/,
        "password must contain at least one special character"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "password must match")
      .required("confirm password is required"),
  });

  return validationSchema;
};

export const validateLogin = () => {
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email provided")
      .required("Email is missing"),
    password: yup.string().required("Password is missing"),
  });
  return validationSchema;
};

export const validateResetPassword = () => {
  const validationSchema = yup.object({
    password: yup
      .string()
      .required("password is required")
      .min(8, "password must be at least 8 character long")
      .matches(/[a-z]+/, "password must contain at least one lower case letter")
      .matches(/[A-Z]+/, "password must contain at least one Upper case letter")
      .matches(/\d+/, "password must contain at least one number")
      .matches(
        /[@$!%#*?&]+/,
        "password must contain at least one special character"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "password must match")
      .required("confirm password is required"),
  });
  return validationSchema;
}

export const validateRegister = () => {
  const validationSchema = yup.object({
    name: yup.string().required("Full name is required"),
    email: yup
      .string()
      .email("Invalid email provided")
      .required("Email is missing"),
    password: yup
      .string()
      .required("password is required")
      .min(8, "password must be at least 8 character long")
      .matches(/[a-z]+/, "password must contain at least one lower case letter")
      .matches(/[A-Z]+/, "password must contain at least one Upper case letter")
      .matches(/\d+/, "password must contain at least one number")
      .matches(
        /[@$!%#*?&]+/,
        "password must contain at least one special character"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "password must match")
      .required("confirm password is required"),
  });
  return validationSchema;
};

export const validateContactDetails = () => {
  const validationSchema = yup.object({
    fullName: yup.string().required("Enter your name"),
    email: yup
      .string()
      .email("Invalid email provided")
      .required("Email is missing"),
    country: yup.string().required("country is missing"),
    phoneNumber: yup
      .number("Must be a number")
      .required("phone number is required"),
    subject: yup.string().required("subject is missing"),
    message: yup.string().required("messsge is required"),
  });
  return validationSchema;
};