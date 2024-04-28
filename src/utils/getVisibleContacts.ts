import { IContact } from '../interfaces/interfaces';

export const getVisibleContacts = (contacts: IContact[], filter: string) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
