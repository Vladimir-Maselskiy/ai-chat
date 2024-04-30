import styled from 'styled-components';
import { Layout } from 'antd';
const { Content } = Layout;

interface IProps {
  theme: 'light' | 'dark';
}

export const ContentStyled = styled(Content)<IProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  width: 66.666%;
  height: 100vh;
  overflow-y: scroll;
  border-left: 1px solid #ccc;
  background-color: ${props =>
    props.theme === 'light' ? 'transparent' : 'rgb(0, 21, 41)'};
`;
