import { IMessage } from '../../interfaces/interfaces';
import { TimeOfLastMessageStyled } from './TimeOfLastMessage.styled';
import moment from 'moment';

interface IProps {
  messages: IMessage[];
}

export const TimeOfLastMessage = ({ messages }: IProps) => {
  return (
    messages[messages.length - 1]?.createdAT && (
      <TimeOfLastMessageStyled>
        {moment(messages[messages.length - 1].createdAT).format('MMM DD, GGGG')}
      </TimeOfLastMessageStyled>
    )
  );
};
