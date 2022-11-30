import { Contact } from "../../entities/contacts";

export interface IUser {
  id: string;
  fullName: string;
  email1: string;
  email2: string | null;
  phone1: string | null;
  phone2: string | null;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  contacts: Contact[];
}

export interface IUserRequest {
  fullName: string;
  email1: string;
  email2?: string;
  phone1: string;
  phone2?: string;
  password: string;
}

export interface IUserUpdate {
  fullName?: string;
  email1?: string;
  email2?: string;
  phone1?: string;
  phone2?: string;
  password?: string;
  oldPassword: string;
}
