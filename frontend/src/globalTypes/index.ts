export interface IFormData {
  name?: string | undefined;
  fullName?: string | undefined;
  email?: string | undefined;
  email1?: string | undefined;
  email2?: string | undefined;
  phone1?: string | undefined;
  phone2?: string | undefined;
  password?: string | undefined;
  confirmPassword?: string | undefined;
}

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
