import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { retrieveUserService } from "../../services/user/retrieveUser.service";

export const retrieveUserController = async (req: Request, res: Response) => {
  const { userEmail } = req;

  const user = await retrieveUserService(userEmail!);

  return res.json(instanceToPlain(user));
};
