import { ISessionHook } from "./types";
import { api } from "../../services/api";
import { IUser } from "../../globalTypes";
import { toast } from "react-toastify";

export const useSessionInfo = (): ISessionHook => {
  let fullName = sessionStorage.getItem("fullName");
  let email1 = sessionStorage.getItem("email1");
  let email2 = sessionStorage.getItem("email2");
  let phone1 = sessionStorage.getItem("phone1");
  let phone2 = sessionStorage.getItem("phone2");
  let token = sessionStorage.getItem("token");
  let id = sessionStorage.getItem("id");

  fullName = fullName ? JSON.parse(fullName) : fullName;
  email1 = email1 ? JSON.parse(email1) : email1;
  email2 = email2 ? JSON.parse(email2) : email2;
  phone1 = phone1 ? JSON.parse(phone1) : phone1;
  phone2 = phone2 ? JSON.parse(phone2) : phone2;
  token = token ? JSON.parse(token) : token;
  id = id ? JSON.parse(id) : id;

  const saveSession = (
    key: string,
    value: string | number | object | object[]
  ): void => {
    value = JSON.stringify(value);
    sessionStorage.setItem(key, value);
  };

  const getUser = async (): Promise<IUser | any> => {
    try {
      const response = await api.get("users/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      sessionStorage.setItem("id", JSON.stringify(response.data.id));
      sessionStorage.setItem(
        "fullName",
        JSON.stringify(response.data.fullName)
      );
      sessionStorage.setItem("email1", JSON.stringify(response.data.email1));
      sessionStorage.setItem("email2", JSON.stringify(response.data.email2));
      sessionStorage.setItem("phone1", JSON.stringify(response.data.phone1));
      sessionStorage.setItem("phone2", JSON.stringify(response.data.phone2));

      return response.data;
    } catch (error) {
      toast.error("Problemas ao carregar informações de usuário", {
        icon: "🦆🔴",
      });
    }
  };

  const delUser = async (): Promise<void> => {
    try {
      await api.delete(`users/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      toast.error("Problemas ao deletar o usuário", {
        icon: "🦆🔴",
      });
    }
  };

  const delContact = async (contactId: string): Promise<void> => {
    try {
      await api.delete(`contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      toast.error("Problemas ao deletar o contato", {
        icon: "🦆🔴",
      });
    }
  };

  return {
    fullName,
    email1,
    email2,
    phone1,
    phone2,
    token,
    id,
    saveSession,
    getUser,
    delUser,
    delContact,
  };
};
