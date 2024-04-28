import { Avatar, Card, Space } from 'antd';
import { IMessage } from '../../interfaces/interfaces';

export const Message = ({ message }: { message: IMessage }) => {
  return (
    <Card bordered={false} style={{ width: 300, marginTop: 16, padding: 0 }}>
      <Space style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
        <span style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 18 }}>
          {message.role === 'user' ? 'You' : 'ChatGPT'}
        </span>
      </Space>
      <Space style={{ width: '100%', marginTop: 10 }}>
        <span>{message.text}</span>
      </Space>
    </Card>
  );
};
