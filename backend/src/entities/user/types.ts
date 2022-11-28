export interface IUser {
  id: string;
  fullName: string;
  email1: string;
  email2: string;
  phone1: string;
  phone2: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserRequest {
  fullName: string;
  email1: string;
  email2?: string;
  phone1?: string;
  phone2?: string;
  password: string;
}

export interface IUserLoginRequest {
  email: string;
  password: string;
}

export interface IUserUpdate {
  fullName: string;
  email1: string;
  email2: string;
  phone1: string;
  phone2: string;
  password: string;
  oldPassword: string;
}
