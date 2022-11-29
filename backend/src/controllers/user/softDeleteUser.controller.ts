import { Request, Response } from "express";
import { softDeleteUserService } from "../../services/user/softDeleteUser.service";

export const softDeleteUserController = async (req: Request, res: Response) => {
  const { userId } = req;

  await softDeleteUserService(userId!);

  return res.status(204);
};
