import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contacts";
import { User } from "../../entities/user";
import { AppError } from "../../errors";
import { IContactRequest } from "./types";

export const createContactService = async (
  { email1, email2, name, phone1, phone2 }: IContactRequest,
  userEmail: string
) => {
  const userRepo = AppDataSource.getRepository(User);
  const user = await userRepo.findOneBy({ email1: userEmail });

  if (!user) {
    throw new AppError(404, "user not found");
  }

  const contactRepo = AppDataSource.getRepository(Contact);

  const newContact = contactRepo.create({
    name,
    email1,
    email2,
    phone1,
    phone2,
    user,
  });

  await contactRepo.save(newContact);

  const contact = await contactRepo.findOneBy({ id: newContact.id });

  return contact;
};
