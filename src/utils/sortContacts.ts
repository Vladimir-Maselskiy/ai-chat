import { IContact } from '../interfaces/interfaces';

export const sortContacts = (
  contacts: IContact[],
  setContacts: React.Dispatch<React.SetStateAction<IContact[]>>
) => {
  setContacts(
    [...contacts].sort((a, b) => {
      const a1 = Number(a.messages[a.messages.length - 1]?.createdAT) || 0;
      const b1 = Number(b.messages[b.messages.length - 1]?.createdAT) || 0;
      return b1 - a1;
    })
  );
};
