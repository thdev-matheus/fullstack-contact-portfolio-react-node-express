import { Dispatch, SetStateAction } from "react";
import { IUser } from "../../globalTypes";

export interface IUpdateUserModalProps {
  setEditUserModal: Dispatch<SetStateAction<boolean>>;
  setUser: Dispatch<SetStateAction<IUser>>;
}
