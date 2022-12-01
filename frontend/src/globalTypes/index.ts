export interface IRegisterData {
  fullName: string;
  email1: string;
  email2?: string;
  phone1: string;
  phone2?: string;
  password: string;
  confirmPassword?: string;
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
