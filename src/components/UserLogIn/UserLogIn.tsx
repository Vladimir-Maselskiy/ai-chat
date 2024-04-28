import { Space } from 'antd';

interface IProps {
  userLogin: {
    Ad: string;
    cu: string;
  };
}

export const UserLogIn = ({ userLogin }: IProps) => {
  return (
    <Space>
      <p>{userLogin.Ad}</p>
      <p>{userLogin.cu}</p>
    </Space>
  );
};
