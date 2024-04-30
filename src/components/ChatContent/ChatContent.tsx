import React from 'react';
import { IContact } from '../../interfaces/interfaces';
import { CurrentContact } from '@/CurrentContact/CurrentContact';
import { Messages } from '@/Messages/Messages';
import { MessageCreator } from '@/MessageCreator/MessageCreator';
import { WellcomeMessage } from '@/WellcomeMessage/WellcomeMessage';
import { ContentStyled } from './ChatContent.styled';
import { useThemeStore } from '../../store/store';

interface IProps {
  currentContact: IContact | null;
  setCurrentContact: React.Dispatch<React.SetStateAction<IContact | null>>;
  setContacts: React.Dispatch<React.SetStateAction<IContact[]>>;
}

export const ChatContent = ({
  currentContact,
  setCurrentContact,
  setContacts,
}: IProps) => {
  const theme = useThemeStore(state => state.theme);
  return (
    <ContentStyled theme={theme}>
      {currentContact?.id ? (
        <>
          <CurrentContact currentContact={currentContact} />
          <Messages currentContact={currentContact} />
          <MessageCreator
            currentContact={currentContact}
            setCurrentContact={setCurrentContact}
            setContacts={setContacts}
          />
        </>
      ) : (
        <WellcomeMessage />
      )}
    </ContentStyled>
  );
};
