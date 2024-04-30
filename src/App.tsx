import { useState } from 'react';
import { IContact } from './interfaces/interfaces';
import { Flex, Layout } from 'antd';
import { SideBar } from '@/SideBar/SideBar';
import { ChatContent } from './components/ChatContent/ChatContent';

export function App() {
  const [currentContact, setCurrentContact] = useState<IContact | null>(null);
  const [contacts, setContacts] = useState<IContact[]>([]);

  return (
    <Layout
      style={{
        overflow: 'hidden',
        width: '100vw',
        height: '100wh',
      }}
    >
      <Flex style={{ width: '100%' }}>
        <SideBar
          contacts={contacts}
          setContacts={setContacts}
          setCurrentContact={setCurrentContact}
        />
        <ChatContent
          currentContact={currentContact}
          setCurrentContact={setCurrentContact}
          setContacts={setContacts}
        />
      </Flex>
    </Layout>
  );
}
