import { Box } from '@/Box/Box';

interface IProps {
  userLogin: {
    Ad: string;
    cu: string;
  };
}

export const UserLogIn = ({ userLogin }: IProps) => {
  return (
    <Box>
      <p>{userLogin.Ad}</p>
      <p>{userLogin.cu}</p>
    </Box>
  );
};
