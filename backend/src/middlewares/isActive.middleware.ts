import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user";
import { AppError } from "../errors";

export const isActiveMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req;
  const userRepo = AppDataSource.getRepository(User);
  const user = await userRepo.findOneBy({ id: userId });

  if (!user) {
    throw new AppError(404, "User not found");
  }

  if (!user.isActive) {
    throw new AppError(410, "user isn't active");
  }

  next();
};
