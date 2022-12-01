import { Dispatch, SetStateAction } from "react";
import { IUser } from "../../globalTypes";

export interface IContactFormProps {
  setUser: Dispatch<SetStateAction<IUser>>;
}
