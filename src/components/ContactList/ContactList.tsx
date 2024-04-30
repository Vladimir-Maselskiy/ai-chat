import { ContactItem } from '@/ContactItem/ContactItem';
import { ContactListStyled } from './ContactList.styled';
import { IContact } from '../../interfaces/interfaces';
import { Flex } from 'antd';

interface IProps {
  contacts: IContact[];
  onContactClick: (id: string) => void;
}

export const ContactList = ({ contacts, onContactClick }: IProps) => {
  return (
    <>
      <Flex
        style={{
          alignItems: 'center',
          paddingLeft: 10,
          color: '#4e9fc5',
        }}
      >
        <h2>Chats</h2>
      </Flex>

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
