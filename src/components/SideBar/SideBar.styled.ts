import { Layout } from 'antd';
import styled from 'styled-components';

const { Sider } = Layout;

export const SideBarStyled = styled(Sider)`
  display: flex;
  flex-direction: columns;
  width: 33%;
  height: 100vh;
`;
