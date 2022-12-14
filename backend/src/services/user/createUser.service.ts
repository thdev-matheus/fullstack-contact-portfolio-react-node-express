import AppDataSource from "../../data-source";
import { User } from "../../entities/user";
import { AppError } from "../../errors";
import { IUser, IUserRequest } from "./types";
import { hashSync } from "bcrypt";

export const createUserService = async ({
  fullName,
  email1,
  password,
  email2,
  phone1,
  phone2,
}: IUserRequest): Promise<IUser> => {
  const userRepo = AppDataSource.getRepository(User);
  const userAlreadyExists = await userRepo.findOneBy({ email1 });

  if (userAlreadyExists) {
    throw new AppError(409, "Email already exists");
  }

  const newUser = userRepo.create({
    fullName,
    email1,
    email2,
    phone1,
    phone2,
    password: hashSync(password, 10),
  });

  await userRepo.save(newUser);

  return newUser;
};
