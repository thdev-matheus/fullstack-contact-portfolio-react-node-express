import { User } from "../user";

export interface IContact {
  id: string;
  name: string;
  email1: string;
  email2: string | null;
  phone1: string;
  phone2: string | null;
  user: User;
}

export interface IContactRequest {
  name?: string;
  email1?: string;
  email2?: string;
  phone1?: string;
  phone2?: string;
}
