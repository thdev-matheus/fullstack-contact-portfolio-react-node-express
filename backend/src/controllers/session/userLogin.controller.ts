import { userLoginService } from "../../services/session/userLogin.service";
import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { IUserLoginRequest } from "../../services/session/types";

export const userLoginController = async (req: Request, res: Response) => {
  const { email, password }: IUserLoginRequest = req.body;

  const loggedUser = await userLoginService({ email, password });

  return res.json(instanceToPlain(loggedUser));
};
