import * as yup from "yup";
import { emailErr, nameErr, passwordErr } from "./InputErrorsMsg";

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email(emailErr.isEmail)
    .required("This field is required"),
  password: yup
    .string()
    .min(4, passwordErr.minLength)
    .max(20, passwordErr.maxLength)
    .required("This field is required"),
  firstName: yup
    .string()
    .min(4, nameErr.minLength)
    .max(25, nameErr.maxLength)
    .required("This field is required"),
  lastName: yup
    .string()
    .min(4, nameErr.minLength)
    .max(25, nameErr.maxLength)
    .required("This field is required")
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email(emailErr.isEmail)
    .required("This field is required"),
  password: yup
    .string()
    .min(4, passwordErr.minLength)
    .max(20, passwordErr.maxLength)
    .required("This field is required")
});
