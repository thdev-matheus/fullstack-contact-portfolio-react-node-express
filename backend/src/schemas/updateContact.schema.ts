import * as yup from "yup";
import { SchemaOf } from "yup";
import { IContactUpdate } from "../services/contact/types";

export const updateContactSchema: SchemaOf<IContactUpdate> = yup
  .object()
  .shape({
    name: yup.string().min(5, "name: at least 5 characters"),

    email1: yup.string().email("email1: Invalid e-mail"),

    email2: yup.string().email("email2: Mandatory field"),

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
  });
