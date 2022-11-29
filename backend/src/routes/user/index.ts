import { Router } from "express";
import { createUsercontroller } from "../../controllers/user/createUser.controller";
import { retrieveUserController } from "../../controllers/user/retrieveUser.controller";
import { createUserValidationFieldsMiddleware } from "../../middlewares/createUserValidationFields.middleware";
import { isAuthenticatedMiddleware } from "../../middlewares/isAuthenticated.middleware";
import { createUserSchema } from "../../schemas/createUser.schema";

const router = Router();

export const userRoutes = () => {
  router.post(
    "",
    createUserValidationFieldsMiddleware(createUserSchema),
    createUsercontroller
  );
  router.get("/procfile/", isAuthenticatedMiddleware, retrieveUserController);

  return router;
};
