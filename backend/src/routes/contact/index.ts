import { Router } from "express";
import { createContactController } from "../../controllers/contact/createContact.controller";
import { createContactValidationFieldsMiddleware } from "../../middlewares/createContactValidationFields.middleware";
import { isActiveMiddleware } from "../../middlewares/isActive.middleware";
import { isAuthenticatedMiddleware } from "../../middlewares/isAuthenticated.middleware";
import { createContactSchema } from "../../schemas/createContact.schema";

const router = Router();

export const contactRoutes = () => {
  router.post(
    "",
    isAuthenticatedMiddleware,
    isActiveMiddleware,
    createContactValidationFieldsMiddleware(createContactSchema),
    createContactController
  );
  return router;
};
