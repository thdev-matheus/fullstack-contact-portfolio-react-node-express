import { Express } from "express";
import { userRoutes } from "./user";

export const appRoutes = (app: Express): void => {
  app.use("/users", userRoutes());
};
