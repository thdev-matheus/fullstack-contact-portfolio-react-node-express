import { Express } from "express";
import { userRoutes } from "./user";
import { sessionRoutes } from "./session";

export const appRoutes = (app: Express): void => {
  app.use("/users", userRoutes());
  app.use("/login", sessionRoutes());
};
