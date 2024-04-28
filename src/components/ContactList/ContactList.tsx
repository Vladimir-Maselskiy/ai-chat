import { ContactItem } from '@/ContactItem/ContactItem';
import { ContactListStyled } from './ContactList.styled';
import { IContact } from '../../interfaces/interfaces';
import { Space } from 'antd';

interface IProps {
  contacts: IContact[];
  onContactClick: (id: string) => void;
}

export const ContactList = ({ contacts, onContactClick }: IProps) => {
  return (
    <>
      <Space
        style={{
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: 10,
          color: '#4e9fc5',
        }}
      >
        <h2>Chats</h2>
      </Space>

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
