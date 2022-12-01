import { ISessionHook } from "./types";

export const useSessionInfo = (): ISessionHook => {
  let fullName = sessionStorage.getItem("fullName");
  let email1 = sessionStorage.getItem("email1");
  let email2 = sessionStorage.getItem("email2");
  let phone1 = sessionStorage.getItem("phone1");
  let phone2 = sessionStorage.getItem("phone2");
  let token = sessionStorage.getItem("token");

  fullName = fullName ? JSON.parse(fullName) : fullName;
  email1 = email1 ? JSON.parse(email1) : email1;
  email2 = email2 ? JSON.parse(email2) : email2;
  phone1 = phone1 ? JSON.parse(phone1) : phone1;
  phone2 = phone2 ? JSON.parse(phone2) : phone2;
  token = token ? JSON.parse(token) : token;

  const saveSession = (
    key: string,
    value: string | number | object | object[]
  ): void => {
    value = JSON.stringify(value);
    sessionStorage.setItem(key, value);
  };

  return {
    fullName,
    email1,
    email2,
    phone1,
    phone2,
    token,
    saveSession,
  };
};
