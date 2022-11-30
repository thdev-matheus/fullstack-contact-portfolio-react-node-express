import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contacts";
import { AppError } from "../../errors";

export const deleteContactService = async (contactId: string) => {
  const contactRepo = AppDataSource.getRepository(Contact);
  const contact = await contactRepo.findOneBy({ id: contactId });

  if (!contact) {
    throw new AppError(404, "Contact not found");
  }

  await contactRepo.delete(contactId);

  return true;
};
