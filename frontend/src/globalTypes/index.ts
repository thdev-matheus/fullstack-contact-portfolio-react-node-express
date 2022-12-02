export interface IRegisterData {
  fullName: string;
  email1: string;
  email2?: string;
  phone1: string;
  phone2?: string;
  password: string;
  confirmPassword?: string;
}

export interface IUpdateUserData {
  fullName?: string;
  email1?: string;
  email2?: string;
  phone1?: string;
  phone2?: string;
  password?: string;
  oldPassword: string;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IContactData {
  name: string;
  email1: string;
  email2?: string;
  phone1: string;
  phone2?: string;
}

export interface IUser {
  id: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  fullName: string;
  email1: string;
  email2: string;
  phone1: string;
  phone2: string;
  contacts: IContact[];
}

export interface IContact {
  id: string;
  name: string;
  email1: string;
  email2: string | null;
  phone1: string;
  phone2: string | null;
  user?: IUser;
}
