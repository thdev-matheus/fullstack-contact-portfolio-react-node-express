import { Request, Response } from "express";
import { deleteContactService } from "../../services/contact/deleteContact.service";

export const deleteContactController = async (req: Request, res: Response) => {
  const { contactId } = req.params;

  const _ = await deleteContactService(contactId);

  return res.status(204).json();
};
