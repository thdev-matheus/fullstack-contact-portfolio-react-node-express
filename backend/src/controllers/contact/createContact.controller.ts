import { Request, response, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { IContactRequest } from "../../services/contact/types";
import { createContactService } from "../../services/contact/createContact.service";

export const createContactController = async (req: Request, res: Response) => {
  const { email1, name, phone1, email2, phone2 }: IContactRequest = req.body;
  const { userEmail } = req;

  const createdContact = await createContactService(
    { email1, name, phone1, email2, phone2 },
    userEmail!
  );

  return res.status(201).json(createdContact);
};
