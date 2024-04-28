import { Box } from '@/Box/Box';
import {
  AiOutlineCheckCircleStyled,
  IMGStyled,
} from '@/ContactItem/ContactItem.styled';
import { IContact } from '../../interfaces/interfaces';

interface IProps {
  currentContact: IContact;
}

export const CurrentContact = ({ currentContact }: IProps) => {
  const { id, name, avatar } = currentContact;
  return (
    id && (
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        height="70px"
        borderBottom="1px solid #ccc"
        padding="10px"
        bg="#f5f5f5"
      >
        <Box position="relative" width={40}>
          <IMGStyled src={avatar} alt={name} width="40px" height="40px" />
          <AiOutlineCheckCircleStyled />
        </Box>
        <Box ml={20}>
          <p>{name}</p>
        </Box>
      </Box>
    )
  );
};
