import { Dispatch, SetStateAction } from "react";
import { IUser } from "../../globalTypes";

export interface IUpdateContactModalProps {
  setEditContactModal: Dispatch<SetStateAction<boolean>>;
  setUser: Dispatch<SetStateAction<IUser>>;
  contactId: string;
}
