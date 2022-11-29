import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserRequest } from "../services/user/types";

export const createUserSchema: SchemaOf<IUserRequest> = yup.object().shape({
  fullName: yup.string().required("fullName: Mandatory field").min(5),

  email1: yup
    .string()
    .email("email1: Invalid e-mail")
    .required("email1: Mandatory field"),

  email2: yup.string().email("email2: Mandatory field"),

  password: yup
    .string()
    .required("password: Mandatory field")
    .max(50)
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "password: The password field must contain at least one uppercase letter & one lowercase letter & a special character & a number and at least 8 digits."
    ),

  phone1: yup
    .string()
    .required("phone1: Mandatory field")
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
});
