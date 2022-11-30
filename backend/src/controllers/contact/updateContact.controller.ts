import { Request, Response } from "express";
import { IContactRequest } from "../../services/contact/types";
import { updateContactService } from "../../services/contact/updateContact.service";

export const updateContactController = async (req: Request, res: Response) => {
  const { contactId } = req.params;
  const { email1, name, phone1, email2, phone2 }: IContactRequest = req.body;

  const updatedContact = await updateContactService(
    { email1, email2, name, phone1, phone2 },
    contactId
  );

  return res.json(updatedContact);
};
