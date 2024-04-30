import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Flex, Layout } from 'antd';
import { useThemeStore } from '../../store/store';
import { IContact } from '../../interfaces/interfaces';
import { ContactList } from '@/ContactList/ContactList';
import { getVisibleContacts } from '../../utils/getVisibleContacts';
import { setSortedContacts } from '../../utils/setSortedContacts';
import { getCurrentContactByID } from '../../utils/getCurrentContactByID';
import { FilterBar } from '@/FilterBar/FilterBar';

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

  const theme = useThemeStore(state => state.theme);
  const { Sider } = Layout;

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
    <Sider
      theme={theme}
      width="33%"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <Flex style={{ flexDirection: 'column', height: '100%', width: '100%' }}>
        <FilterBar setFilter={setFilter} />
        <ContactList
          contacts={visibleСontacts}
          onContactClick={onContactClick}
        />
      </Flex>
    </Sider>
  );
};
