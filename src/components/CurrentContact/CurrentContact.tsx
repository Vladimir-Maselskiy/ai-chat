import {
  AiOutlineCheckCircleStyled,
  IMGStyled,
} from '@/ContactItem/ContactItem.styled';
import { IContact } from '../../interfaces/interfaces';
import { Space } from 'antd';
import { useThemeStore } from '../../store/store';

interface IProps {
  currentContact: IContact;
}

export const CurrentContact = ({ currentContact }: IProps) => {
  const { id, name, avatar } = currentContact;
  const theme = useThemeStore(state => state.theme);
  return (
    id && (
      <Space
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          height: 70,
          borderBottom: '1px solid #ccc',
          padding: 10,
          background: theme === 'light' ? '#f5f5f5' : '#1e1f5a',
          color: theme === 'light' ? '#494848' : 'white',
        }}
      >
        <Space style={{ position: 'relative', width: 40 }}>
          <IMGStyled src={avatar} alt={name} width="40px" height="40px" />
          <AiOutlineCheckCircleStyled />
        </Space>
        <Space style={{ marginLeft: 20 }}>
          <p>{name}</p>
        </Space>
      </Space>
    )
  );
};
