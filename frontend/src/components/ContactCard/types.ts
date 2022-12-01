import { Dispatch, SetStateAction } from "react";
import { IContact, IUser } from "../../globalTypes";

export interface IContactCardProps {
  contact: IContact;
  setUser: Dispatch<SetStateAction<IUser>>;
}
