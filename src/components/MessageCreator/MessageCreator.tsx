import axios from 'axios';
import { nanoid } from 'nanoid';

import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  MdOutlineSendStyled,
} from './MessageCreator.styled';
import { IContact } from '../../interfaces/interfaces';
import React from 'react';
import { Flex, Space } from 'antd';
import { useThemeStore } from '../../store/store';

interface IProp {
  currentContact: IContact;
  setCurrentContact: React.Dispatch<React.SetStateAction<IContact | null>>;
  setContacts: React.Dispatch<React.SetStateAction<IContact[]>>;
}

export const MessageCreator = ({
  currentContact,
  setCurrentContact,
  setContacts,
}: IProp) => {
  const theme = useThemeStore(state => state.theme);
  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const outgoingMessage = evt.target.elements.name.value;
    if (outgoingMessage === '') return;
    const outgoingMessageObj = {
      id: nanoid(),
      type: 'outgoing' as 'outgoing' | 'incoming',
      createdAT: Date.now(),
      value: outgoingMessage,
    };

    setContacts(prevState => {
      return prevState.map(contact => {
        if (contact.id === currentContact.id) {
          axios.put(
            `https://62e66c32de23e263792c05a8.mockapi.io/contacts/${contact.id}`,
            {
              ...contact,
              messages: [...contact.messages, outgoingMessageObj],
            }
          );
          return {
            ...contact,
            messages: [...contact.messages, outgoingMessageObj],
          };
        }
        return contact;
      });
    });

    setCurrentContact(prev => {
      if (!prev) return null;
      return {
        ...prev,
        messages: [...prev.messages, outgoingMessageObj],
      };
    });

    axios.get('https://api.chucknorris.io/jokes/random').then(resp => {
      const { id, value } = resp.data;
      const incomingMessageObj = {
        id,
        type: 'incoming' as 'outgoing' | 'incoming',
        createdAT: Date.now(),
        value,
      };
      setTimeout(
        () => {
          setContacts(prevState => {
            return prevState.map(contact => {
              if (contact.id === currentContact.id) {
                axios.put(
                  `https://62e66c32de23e263792c05a8.mockapi.io/contacts/${contact.id}`,
                  {
                    ...contact,
                    messages: [...contact.messages, incomingMessageObj],
                  }
                );
                return {
                  ...contact,
                  messages: [...contact.messages, incomingMessageObj],
                };
              }
              return contact;
            });
          });
          setCurrentContact(prev => {
            if (!prev) return null;
            return {
              ...prev,
              messages: [...prev.messages, incomingMessageObj],
            };
          });
        },
        5000 + Math.random() * 50
      );
    });
    evt.target.reset();
  };

  return (
    <Flex
      style={{
        position: 'relative',
        bottom: 0,
        width: '100%',
        height: 90,
        background: theme === 'light' ? '#f5f5f5' : '#1e1f5a',
        borderTop: '1px solid #ccc',
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
      }}
    >
      <FormStyled onSubmit={onSubmit}>
        <InputStyled
          type="text"
          name="name"
          autoComplete="off"
          placeholder="Type your message"
        />
        <ButtonStyled type="submit">
          <MdOutlineSendStyled size={20} />
        </ButtonStyled>
      </FormStyled>
    </Flex>
  );
};
