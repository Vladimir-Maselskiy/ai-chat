import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Box } from './components/Box/Box';
import { Filter } from '@/Filter/Filter';
import { ContactList } from '@/ContactList/ContactList';
import { Anonymous } from '@/Anonymous/Anonymous';
import { getVisibleContacts } from '../src/utils/getVisibleContacts';
import { CurrentContact } from '@/CurrentContact/CurrentContact';
import { getCurrentContactByID } from './utils/getCurrentContactByID';
import { MessageCreator } from '@/MessageCreator/MessageCreator';
import { Messages } from '@/Messages/Messages';
import { WellcomeMessage } from '@/WellcomeMessage/WellcomeMessage';
import { UserLogIn } from '@/UserLogIn/UserLogIn';
import { sortContacts } from '../src/utils/sortContacts';
import { IContact } from './interfaces/interfaces';
import { Space } from 'antd';

export function App() {
  const emptyArray = useRef(true);
  const [data, setData] = useState<IContact[]>([]);
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [visibleСontacts, setVisibleСontacts] = useState<IContact[]>([]);
  const [filter, setFilter] = useState<string>('');
  const [currentContact, setCurrentContact] = useState<IContact | null>(null);
  const [userLogin] = useState(null);

  useEffect(() => {
    axios
      .get('https://62e66c32de23e263792c05a8.mockapi.io/contacts')
      .then(resp => {
        setData(resp.data);
        sortContacts(resp.data, setData);
      });
  }, []);

  // Error 429 and React.Strict resolve
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

  useEffect(() => {
    setVisibleСontacts(getVisibleContacts(contacts, filter));
  }, [contacts, filter]);

  useEffect(() => {
    if (currentContact && currentContact.id) {
      setCurrentContact(
        contacts.find(contact => contact.id === currentContact.id) || null
      );
    }
  }, [contacts, currentContact?.id]);

  const onContactClick = (id: string) => {
    setCurrentContact(getCurrentContactByID(contacts, id));
  };

  return (
    <Space style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      {contacts.length > 0 && (
        <Space style={{ display: 'flex' }}>
          <Space
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: 1 / 3,
              minWidth: 170,
              borderRight: '1px solid #ccc',
            }}
          >
            <Space
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                minHeight: 140,
                padding: 20,
                flexDirection: 'column',
                background: '#f5f5f5',
                borderBottom: '1px solid #ccc',
              }}
            >
              <Space
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                {userLogin ? (
                  <UserLogIn userLogin={userLogin} />
                ) : (
                  <Anonymous />
                )}
                {/* {userLogin ? (
                  <GoogleLogout
                    clientId={clientId}
                    buttonText="Log out"
                    onLogoutSuccess={logOut}
                    render={renderProps => (
                      <GoogleButtonStyled
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      >
                        <IoLogOutOutline size={40} color="#767676" />
                      </GoogleButtonStyled>
                    )}
                  />
                ) : (
                  <GoogleLogin
                    clientId="141257002444-3jn6k1q7gtq95d2cjbuo32iusbjh4vah.apps.googleusercontent.com"
                    render={renderProps => (
                      <GoogleButtonStyled
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      >
                        <IoLogInOutline size={40} color="#767676" />
                      </GoogleButtonStyled>
                    )}
                    onSuccess={responseGoogleonSuccess}
                    onFailure={responseGoogleonFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                  />
                )} */}
              </Space>

              <Filter setFilter={setFilter} />
            </Space>
            <ContactList
              contacts={visibleСontacts}
              onContactClick={onContactClick}
            />
          </Space>
          <Space
            style={{
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              justifyContent: 'space-between',
              height: '100%',
              width: '100%',
            }}
          >
            {currentContact?.id ? (
              <CurrentContact currentContact={currentContact}></CurrentContact>
            ) : (
              <WellcomeMessage />
            )}
            {currentContact?.messages && (
              <Messages currentContact={currentContact} />
            )}
            {currentContact?.id && (
              <MessageCreator
                currentContact={currentContact}
                setContacts={setContacts}
              ></MessageCreator>
            )}
          </Space>
        </Space>
      )}
    </Space>
  );
}
