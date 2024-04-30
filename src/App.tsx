import { useState } from 'react';
import { CurrentContact } from '@/CurrentContact/CurrentContact';
import { MessageCreator } from '@/MessageCreator/MessageCreator';
import { Messages } from '@/Messages/Messages';
import { WellcomeMessage } from '@/WellcomeMessage/WellcomeMessage';
import { IContact } from './interfaces/interfaces';
import { Flex, Layout } from 'antd';
import { SideBar } from '@/SideBar/SideBar';

const { Content } = Layout;

const contentStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  justifyContent: 'space-between',
  width: 2 / 3,
  height: '100vh',
  overflowY: 'scroll',
  borderLeft: '1px solid #ccc',
};

const layoutStyle = {
  overflow: 'hidden',
  width: '100vw',
  height: '100wh',
};

export function App() {
  const [currentContact, setCurrentContact] = useState<IContact | null>(null);
  const [contacts, setContacts] = useState<IContact[]>([]);

  return (
    <Layout style={layoutStyle}>
      <Flex style={{ width: '100%' }}>
        <SideBar
          contacts={contacts}
          setContacts={setContacts}
          setCurrentContact={setCurrentContact}
        />
        <Content style={contentStyle}>
          {currentContact?.id ? (
            <>
              <CurrentContact currentContact={currentContact} />
              <Messages currentContact={currentContact} />
              <MessageCreator
                currentContact={currentContact}
                setContacts={setContacts}
              />
            </>
          ) : (
            <WellcomeMessage />
          )}
        </Content>
      </Flex>
    </Layout>
  );
}
