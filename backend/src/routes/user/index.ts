import { Router } from "express";
import { createUsercontroller } from "../../controllers/user/createUser.controller";
import { retrieveUserController } from "../../controllers/user/retrieveUser.controller";
import { softDeleteUserController } from "../../controllers/user/softDeleteUser.controller";
import { updateUserController } from "../../controllers/user/updateUser.controller";
import { createUserValidationFieldsMiddleware } from "../../middlewares/createUserValidationFields.middleware";
import { isActiveMiddleware } from "../../middlewares/isActive.middleware";
import { isAuthenticatedMiddleware } from "../../middlewares/isAuthenticated.middleware";
import { updateUserValidationFieldsMiddleware } from "../../middlewares/updateUserValidationFields.middleware";
import { createUserSchema } from "../../schemas/createUser.schema";
import { updateUserSchema } from "../../schemas/updateUser.schema";

const router = Router();

export const userRoutes = () => {
  router.post(
    "",
    createUserValidationFieldsMiddleware(createUserSchema),
    createUsercontroller
  );

  router.use(isAuthenticatedMiddleware);
  router.use(isActiveMiddleware);

  router.get("", retrieveUserController);
  router.patch(
    "",
    updateUserValidationFieldsMiddleware(updateUserSchema),
    updateUserController
  );
  router.delete("", softDeleteUserController);

  return router;
};
