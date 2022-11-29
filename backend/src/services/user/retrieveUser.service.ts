import AppDataSource from "../../data-source";
import { AppError } from "../../errors";
import { User } from "../../entities/user";

export const retrieveUserService = async (userEmail: string) => {
  const userRepo = AppDataSource.getRepository(User);
  const user = userRepo.findOneBy({ email1: userEmail });

  if (!user) {
    throw new AppError(404, "user not found");
  }

  return user;
};
