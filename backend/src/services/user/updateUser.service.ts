import { compareSync, hashSync } from "bcrypt";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user";
import { AppError } from "../../errors";
import { IUserUpdate } from "./types";

export const updateUserService = async (
  {
    oldPassword,
    email1,
    email2,
    fullName,
    password,
    phone1,
    phone2,
  }: IUserUpdate,
  userId: string
) => {
  if (!email1 && !email2 && !fullName && !phone1 && !password && !phone2) {
    throw new AppError(
      406,
      "It is not possible to make any changes if there is nothing to change"
    );
  }

  const userRepo = AppDataSource.getRepository(User);
  const user = await userRepo.findOneBy({ id: userId });

  if (!user) {
    throw new AppError(404, "User not found");
  }

  const passwordMatch = compareSync(oldPassword, user.password);

  if (!passwordMatch) {
    throw new AppError(401, "Incorrect password");
  }

  await userRepo.update(userId, {
    email1: email1 || user.email1,
    email2: email2 || user.email2,
    fullName: fullName || user.fullName,
    password: password ? hashSync(password, 10) : user.password,
    phone1: phone1 || user.phone1,
    phone2: phone2 || user.phone2,
  });

  const updatedUser = await userRepo.findOneBy({ id: userId });

  return updatedUser;
};
