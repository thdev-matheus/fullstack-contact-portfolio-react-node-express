import { IUser } from "../../globalTypes";

export interface ISessionHook {
  fullName: string | null;
  email1: string | null;
  email2: string | null;
  phone1: string | null;
  phone2: string | null;
  token: string | null;
  id: string | null;
  saveSession: (
    key: string,
    value: string | number | object | object[]
  ) => void;
  getUser: () => Promise<IUser | any>;
  delContact: (contactId: string) => Promise<void>;
}
