import {
  AiOutlineCheckCircleStyled,
  IMGStyled,
} from '@/ContactItem/ContactItem.styled';
import { IContact } from '../../interfaces/interfaces';
import { Space } from 'antd';

interface IProps {
  currentContact: IContact;
}

export const CurrentContact = ({ currentContact }: IProps) => {
  const { id, name, avatar } = currentContact;
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
          background: '#f5f5f5',
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
