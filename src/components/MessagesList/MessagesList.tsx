import React from 'react';
import { IMessage } from '../../interfaces/interfaces';
import { Message } from '../Message/Message';

interface IProps {
  messages: IMessage[];
}

export const MessagesList = ({ messages }: IProps) => {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {messages.map(message => (
        <li key={message.text}>
          <Message message={message} />
        </li>
      ))}
    </ul>
  );
};
