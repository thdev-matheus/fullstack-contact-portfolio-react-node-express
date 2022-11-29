import { Request, Response } from "express";
import { retrieveAllUserContactsService } from "../../services/contact/retrieveAllUserContcts.service";
import { instanceToPlain } from "class-transformer";

export const retrieveAllUserContactsController = async (
  req: Request,
  res: Response
) => {
  const { userId } = req;

  const contacts = await retrieveAllUserContactsService(userId!);

  return res.json(instanceToPlain(contacts));
};
