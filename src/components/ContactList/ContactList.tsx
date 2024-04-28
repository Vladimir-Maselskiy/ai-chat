import { Box } from '@/Box/Box';
import { ContactItem } from '@/ContactItem/ContactItem';
import { ContactListStyled } from './ContactList.styled';
import { IContact } from '../../interfaces/interfaces';

interface IProps {
  contacts: IContact[];
  onContactClick: (id: string) => void;
}

export const ContactList = ({ contacts, onContactClick }: IProps) => {
  return (
    <>
      <Box
        height="80px"
        display="flex"
        alignItems="center"
        pl="10px"
        color="#4e9fc5"
      >
        <h2>Chats</h2>
      </Box>

      <ContactListStyled>
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            onContactClick={onContactClick}
            contact={contact}
          />
        ))}
      </ContactListStyled>
    </>
  );
};
