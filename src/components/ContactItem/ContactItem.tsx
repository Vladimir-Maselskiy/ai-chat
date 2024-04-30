import { Box } from '@/Box/Box';
import { TimeOfLastMessage } from '@/TimeOfLastMessage/TimeOfLastMessage';
import {
  AiOutlineCheckCircleStyled,
  ContactItemStyled,
  IMGStyled,
} from './ContactItem.styled';
import { IContact } from '../../interfaces/interfaces';
import { Flex } from 'antd';

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

      <Flex
        style={{
          margin: '0 0 0 20px ',
          justifyContent: 'flex-start',
          flexDirection: 'column',
          height: 50,
          width: '50px',
          flexGrow: 1,
          alignItems: 'start',
        }}
      >
        <p style={{ margin: 0 }}>{name}</p>
        {messages.length > 0 && (
          <div
            style={{
              maxHeight: 20,
              maxWidth: '100%',
              overflowX: 'hidden',
              color: '#767676',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
            }}
          >
            {messages[messages.length - 1].value}
          </div>
        )}
      </Flex>
      <div style={{ marginLeft: 'auto' }}>
        <TimeOfLastMessage messages={messages} />
      </div>
    </ContactItemStyled>
  );
};
