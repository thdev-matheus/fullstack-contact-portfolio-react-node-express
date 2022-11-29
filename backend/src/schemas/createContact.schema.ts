import * as yup from "yup";
import { SchemaOf } from "yup";
import { IContactRequest } from "../services/contact/types";

export const createContactSchema: SchemaOf<IContactRequest> = yup
  .object()
  .shape({
    name: yup.string().required("fullName: Mandatory field").min(5),

    email1: yup
      .string()
      .email("email1: Invalid e-mail")
      .required("email1: Mandatory field"),

    email2: yup.string().email("email2: Invalid e-mail"),

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
