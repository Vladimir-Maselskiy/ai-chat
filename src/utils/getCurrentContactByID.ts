import { IContact } from '../interfaces/interfaces';

export const getCurrentContactByID = (contacts: IContact[], id: string) => {
  return contacts.find(contact => contact.id === id) || null;
};
