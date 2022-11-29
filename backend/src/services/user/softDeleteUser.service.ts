import AppDataSource from "../../data-source";
import { User } from "../../entities/user";
import { AppError } from "../../errors";

export const softDeleteUserService = async (userId: string) => {
  const userRepo = AppDataSource.getRepository(User);
  const user = await userRepo.findOneBy({ id: userId });

  if (!user) {
    throw new AppError(404, "user not found");
  }

  await userRepo.update(userId, {
    isActive: false,
  });

  return true;
};
