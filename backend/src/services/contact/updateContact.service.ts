import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contacts";
import { AppError } from "../../errors";
import { IContactUpdate } from "./types";

export const updateContactService = async (
  { email1, email2, name, phone1, phone2 }: IContactUpdate,
  contactId: string
) => {
  if (!email1 && !email2 && !name && !phone1 && !phone2) {
    throw new AppError(
      406,
      "It is not possible to make any changes if there is nothing to change"
    );
  }

  const contactRepo = AppDataSource.getRepository(Contact);
  const contact = await contactRepo.findOneBy({ id: contactId });

  if (!contact) {
    throw new AppError(404, "Contact not found");
  }

  await contactRepo.update(contactId, {
    email1: email1 || contact.email1,
    email2: email2 || contact.email2,
    name: name || contact.name,
    phone1: phone1 || contact.phone1,
    phone2: phone2 || contact.phone2,
  });

  const updatedContact = await contactRepo.findOneBy({ id: contactId });

  return updatedContact;
};
