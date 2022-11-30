import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { IUserUpdate } from "../../services/user/types";
import { updateUserService } from "../../services/user/updateUser.service";

export const updateUserController = async (req: Request, res: Response) => {
  const {
    oldPassword,
    email1,
    email2,
    fullName,
    password,
    phone1,
    phone2,
  }: IUserUpdate = req.body;
  const { userId } = req;

  const updatedUser = await updateUserService(
    { oldPassword, email1, email2, fullName, password, phone1, phone2 },
    userId!
  );

  return res.json(instanceToPlain(updatedUser));
};
