import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { createUserService } from "../../services/user/createUser.service";

export const createUsercontroller = async (req: Request, res: Response) => {
  const { fullName, email1, password, email2, phone1, phone2 } = req.body;

  const createdUser = await createUserService({
    fullName,
    email1,
    password,
    email2,
    phone1,
    phone2,
  });

  return res.status(201).json(instanceToPlain(createdUser));
};
