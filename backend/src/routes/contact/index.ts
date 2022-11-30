import { Router } from "express";
import { createContactController } from "../../controllers/contact/createContact.controller";
import { deleteContactController } from "../../controllers/contact/deleteContact.controller";
import { retrieveAllUserContactsController } from "../../controllers/contact/retrieveAllUserContacts.controller";
import { updateContactController } from "../../controllers/contact/updateContact.controller";
import { createContactValidationFieldsMiddleware } from "../../middlewares/createContactValidationFields.middleware";
import { isActiveMiddleware } from "../../middlewares/isActive.middleware";
import { isAuthenticatedMiddleware } from "../../middlewares/isAuthenticated.middleware";
import { createContactSchema } from "../../schemas/createContact.schema";

const router = Router();

export const contactRoutes = () => {
  router.use(isAuthenticatedMiddleware);
  router.use(isActiveMiddleware);

  router.post(
    "",
    createContactValidationFieldsMiddleware(createContactSchema),
    createContactController
  );
  router.get("", retrieveAllUserContactsController);
  router.patch("/:contactId/", updateContactController);
  router.delete("/:contactId/", deleteContactController);

  return router;
};
