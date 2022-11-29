import { Express } from "express";
import { userRoutes } from "./user";
import { sessionRoutes } from "./session";
import { contactRoutes } from "./contact";

export const appRoutes = (app: Express): void => {
  app.use("/users", userRoutes());
  app.use("/login", sessionRoutes());
  app.use("/contacts", contactRoutes());
};
