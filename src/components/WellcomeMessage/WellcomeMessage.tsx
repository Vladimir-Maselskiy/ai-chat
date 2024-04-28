import { Box } from '@/Box/Box';
import { Space } from 'antd';

export const WellcomeMessage = () => {
  return (
    <Space
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '70px',
        color: '#494848',
        borderBottom: '1px solid #ccc',
        padding: '10px',
        background: '#f5f5f5',
      }}
    >
      Wellcome! Click by any contact and start chating
    </Space>
  );
};
