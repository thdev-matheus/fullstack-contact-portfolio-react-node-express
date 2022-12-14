import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserUpdate } from "../services/user/types";

export const updateUserSchema: SchemaOf<IUserUpdate> = yup.object().shape({
  fullName: yup.string().min(5, "fullName: at least 5 characters"),

  email1: yup.string().email("email1: Invalid e-mail"),

  email2: yup.string().email("email2: Mandatory field"),

  password: yup
    .string()
    .max(50)
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "password: The password field must contain at least one uppercase letter & one lowercase letter & a special character & a number and at least 8 digits."
    ),

  phone1: yup
    .string()
    .min(10, "phone1: Invalid phone number")
    .max(11, "phone1: Invalid phone number")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "phone1: Invalid phone number"
    ),

  phone2: yup
    .string()
    .min(10, "phone2: Invalid phone number")
    .max(11, "phone2: Invalid phone number")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "phone2: Invalid phone number"
    ),

  oldPassword: yup.string().required("oldPassword: Mandatory field"),
});
