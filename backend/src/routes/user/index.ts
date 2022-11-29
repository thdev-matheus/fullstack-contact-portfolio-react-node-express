import { Router } from "express";
import { appRoutes } from "..";
import { createUsercontroller } from "../../controllers/user/createUser.controller";
import { createUserValidationFieldsMiddleware } from "../../middlewares/createUserValidationFields.middleware";
import { createUserSchema } from "../../schemas/createUser.schema";

const router = Router();

export const userRoutes = () => {
  router.post(
    "",
    createUserValidationFieldsMiddleware(createUserSchema),
    createUsercontroller
  );

  return router;
};
