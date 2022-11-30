import AppDataSource from "../../data-source";
import { User } from "../../entities/user";
import { AppError } from "../../errors";
import { IUserLoginRequest } from "./types";
import { compareSync } from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const userLoginService = async ({
  email,
  password,
}: IUserLoginRequest) => {
  if (!email || !password) {
    throw new AppError(400, "the fields email1 and password are mandatory");
  }

  const userRepo = AppDataSource.getRepository(User);
  const user = await userRepo.findOneBy({ email1: email });

  if (!user) {
    throw new AppError(401, "Invalid email or password");
  }

  if (!user.isActive) {
    user.isActive = true;

    await userRepo.save(user);
  }

  const passwordMatch = compareSync(password, user.password);

  if (!passwordMatch) {
    throw new AppError(401, "Invalid email or password");
  }

  const token = jwt.sign(
    { id: user.id, email: user.email1 },
    process.env.SECRET_KEY!,
    { expiresIn: "24h" }
  );

  return {
    token,
    user,
  };
};
