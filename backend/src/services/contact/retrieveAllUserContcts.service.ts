import AppDataSource from "../../data-source";
import { User } from "../../entities/user";
import { Contact } from "../../entities/contacts";
import { AppError } from "../../errors";

export const retrieveAllUserContactsService = async (userId: string) => {
  const contactRepo = AppDataSource.getRepository(Contact);
  const contacts = await contactRepo.find({ relations: { user: true } });
  const userContacts = contacts.filter((contact) => contact.user.id === userId);

  return userContacts;
};
// .filter((contact) => contact.user === user);
