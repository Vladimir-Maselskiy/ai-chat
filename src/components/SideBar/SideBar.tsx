import { Anonymous } from '@/Anonymous/Anonymous';
import { ContactList } from '@/ContactList/ContactList';
import { Filter } from '@/Filter/Filter';
import { SwitchTheme } from '@/SwitchTheme/SwitchTheme';
import { Flex } from 'antd';
import { SideBarStyled } from './SideBar.styled';
import { useEffect, useRef, useState } from 'react';
import { getVisibleContacts } from '../../utils/getVisibleContacts';
import axios from 'axios';
import { IContact } from '../../interfaces/interfaces';
import { setSortedContacts } from '../../utils/setSortedContacts';
import { getCurrentContactByID } from '../../utils/getCurrentContactByID';

interface IProps {
  contacts: IContact[];
  setContacts: React.Dispatch<React.SetStateAction<IContact[]>>;
  setCurrentContact: React.Dispatch<React.SetStateAction<IContact | null>>;
}

export const SideBar = ({
  contacts,
  setContacts,
  setCurrentContact,
}: IProps) => {
  const [filter, setFilter] = useState<string>('');
  const [data, setData] = useState<IContact[]>([]);
  const [visibleСontacts, setVisibleСontacts] = useState<IContact[]>([]);

  const emptyArray = useRef(true);

  useEffect(() => {
    setVisibleСontacts(getVisibleContacts(contacts, filter));
  }, [contacts, filter]);

  useEffect(() => {
    axios
      .get('https://62e66c32de23e263792c05a8.mockapi.io/contacts')
      .then(resp => {
        setSortedContacts(resp.data, setData);
      });
  }, []);

  const onContactClick = (id: string) => {
    setCurrentContact(getCurrentContactByID(contacts, id));
  };

  // 429 Error mockAPI React.Strict in devmode resolve
  useEffect(() => {
    if (emptyArray.current) {
      data.forEach((item, index) => {
        setTimeout(() => {
          setContacts(prevState => {
            return [...prevState, item];
          });
        }, index * 50);
      });
      if (data.length > 0) {
        emptyArray.current = false;
      }
    }
  }, [data, emptyArray, contacts]);

  return (
    <SideBarStyled theme="light">
      <Flex style={{ flexDirection: 'column', height: '100%' }}>
        <Flex
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            minHeight: 140,
            padding: 20,
            flexDirection: 'column',
            background: '#f5f5f5',
            borderBottom: '1px solid #ccc',
            minWidth: '100%',
          }}
        >
          <Flex
            style={{
              justifyContent: 'space-between',
            }}
          >
            <Anonymous />
            <SwitchTheme />
          </Flex>

          <Filter setFilter={setFilter} />
        </Flex>
        <ContactList
          contacts={visibleСontacts}
          onContactClick={onContactClick}
        />
      </Flex>
    </SideBarStyled>
  );
};
