import chatGPTLogo from './assets/chatgpt.svg';
import './App.css';
import { Space, Typography, Image, Input, Button, Tooltip } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

const { Paragraph } = Typography;

function App() {
  const [isSendIconDisabled, setIsSendIconDisabled] = useState(true);
  const [isSendButtonLoading, setIsSendButtonLoading] = useState(false);
  const [messageInputValue, setMessageInputValue] = useState('');

  function getIsSendIconDisabled() {
    return messageInputValue === '';
  }

  useEffect(() => {
    setIsSendIconDisabled(getIsSendIconDisabled());
  }, [messageInputValue]);

  const onMessageInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setMessageInputValue(event.target.value);
  };

  const onClickOnSendButton = () => {
    setIsSendButtonLoading(true);
    setTimeout(() => {
      setIsSendButtonLoading(false);
      setMessageInputValue('');
    }, 2000);
  };
  return (
    <>
      <Image src={chatGPTLogo} alt="Vite Logo" />
      <Paragraph strong={true} style={{ marginTop: 10 }}>
        ChatGPT 3.5
      </Paragraph>
      <Paragraph strong={true} style={{ fontSize: 24 }}>
        How can I help you today?
      </Paragraph>
      <Space.Compact style={{ width: '100%' }}>
        <Input
          placeholder="Message ChatGPT…"
          onChange={onMessageInputChange}
          value={messageInputValue}
        />
        <Button
          disabled={isSendIconDisabled}
          icon={<SendOutlined />}
          loading={isSendButtonLoading}
          onClick={onClickOnSendButton}
        ></Button>
      </Space.Compact>
    </>
  );
}

export default App;
