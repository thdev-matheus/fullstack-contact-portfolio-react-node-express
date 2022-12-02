import { IFormatter } from "./types";

export const useFormatter = (): IFormatter => {
  const convertPhoneNumber = (phoneNumber: string): string => {
    return `(${phoneNumber[0]}${phoneNumber[1]}) ${
      phoneNumber[2]
    } ${phoneNumber.slice(3, 7)} - ${phoneNumber.slice(7)}`;
  };

  const responseError = (message: string): string => {
    const kind = message.split(" ")[0];

    switch (kind) {
      case "name:":
        return "Nome: O novo nome precisa ter ao menos 5 caracteres";
      case "fullName":
        return "Nome: O novo nome precisa ter ao menos 5 caracteres";
      case "email1:":
        return "E-mail 1: Digite um e-mail válido";
      case "email2:":
        return "E-mail 2: Digite um e-mail válido";
      case "phone1:":
        return "Telefone 1: Digite um Telefone válido";
      case "phone2:":
        return "Telefone 2: Digite um Telefone válido";
      case "password:":
        return "Senha: Deve conter 1 maiúscula, 1 minúscula, 1 caracter especial, 1 número e ao menos 8 caractéres.";
      default:
        return "";
    }
  };

  return {
    convertPhoneNumber,
    responseError,
  };
};
