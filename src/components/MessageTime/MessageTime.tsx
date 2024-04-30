import { MessageTimeStyled } from './MessageTime.styled';
import moment from 'moment';

interface IProps {
  type: 'incoming' | 'outgoing';
  createdAt: number;
}
export const MessageTime = ({ type, createdAt }: IProps) => {
  return (
    <MessageTimeStyled type={type}>
      {moment(createdAt).format('MM/DD/YY LT')}
    </MessageTimeStyled>
  );
};
