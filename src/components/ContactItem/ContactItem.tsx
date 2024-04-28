import { Box } from '@/Box/Box';
import { TimeOfLastMessage } from '@/TimeOfLastMessage/TimeOfLastMessage';
import {
  AiOutlineCheckCircleStyled,
  ContactItemStyled,
  IMGStyled,
} from './ContactItem.styled';
import { IContact } from '../../interfaces/interfaces';
import { Space } from 'antd';

interface IProps {
  contact: IContact;
  onContactClick: (id: string) => void;
}

export const ContactItem = ({ contact, onContactClick }: IProps) => {
  const { id, name, avatar, messages } = contact;
  return (
    <ContactItemStyled id={id} onClick={() => onContactClick(id)}>
      <Box position="relative">
        <IMGStyled
          loading="lazy"
          src={avatar}
          alt={name}
          width="40px"
          height="40px"
        />
        <AiOutlineCheckCircleStyled />
      </Box>

      <Space
        style={{
          marginLeft: 20,
          display: 'flex',
          justifyContent: 'center',
          height: 50,
        }}
      >
        <p>{name}</p>
        {messages.length > 0 && (
          <Space
            style={{ maxHeight: 20, overflow: 'hidden', color: '#767676' }}
          >
            {messages[messages.length - 1].value}
          </Space>
        )}
      </Space>
      <Box ml="auto">
        <TimeOfLastMessage messages={messages} />
      </Box>
    </ContactItemStyled>
  );
};
