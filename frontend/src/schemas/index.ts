import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IContactData,
  ILoginData,
  IRegisterData,
  IUpdateContactData,
  IUpdateUserData,
} from "../globalTypes";

export const registerSchema: SchemaOf<IRegisterData> = yup.object().shape({
  fullName: yup.string().required("Campo obrigatório!").min(5),

  email1: yup.string().email("Email inválido").required("Campo obrigatório!"),

  email2: yup.string().email("Email inválido"),

  phone1: yup
    .string()
    .required("Campo obrigatório!")
    .max(11, "Número inválido")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Número inválido"
    ),

  phone2: yup.string(),

  password: yup
    .string()
    .required("Campo obrigatório!")
    .matches(/[A-Z]/, "Ao menos 1 letra maiúscula.")
    .matches(/([a-z])/, "Ao menos 1 letra minúscula.")
    .matches(/(\d)/, "Ao menos 1 número.")
    .matches(/(\W)/, "Ao menos 1 caracter especial.")
    .matches(/.{8,}/, "Ao menos 8 dígitos."),

  confirmPassword: yup
    .string()
    .required("Campo obrigatório!")
    .oneOf([yup.ref("password")], "Senhas diferentes."),
});

export const loginSchema: SchemaOf<ILoginData> = yup.object().shape({
  email: yup.string().email("Email inválido").required("Campo obrigatório!"),

  password: yup.string().required("Campo obrigatório!"),
});

export const contactSchema: SchemaOf<IContactData> = yup.object().shape({
  name: yup.string().required("Campo obrigatório!").min(5),

  email1: yup.string().email("Email inválido").required("Campo obrigatório!"),

  email2: yup.string().email("Email inválido"),

  phone1: yup
    .string()
    .required("Campo obrigatório!")
    .max(11, "Número inválido")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Número inválido"
    ),

  phone2: yup.string(),
});

export const updateUserSchema: SchemaOf<IUpdateUserData> = yup.object().shape({
  fullName: yup.string(),

  email1: yup.string(),

  email2: yup.string(),

  phone1: yup.string(),

  phone2: yup.string(),

  password: yup.string(),

  oldPassword: yup.string().required("Campo obrigatório"),
});

export const updateContactSchema: SchemaOf<IUpdateContactData> = yup
  .object()
  .shape({
    name: yup.string(),

    email1: yup.string(),

    email2: yup.string(),

    phone1: yup.string(),

    phone2: yup.string(),
  });
