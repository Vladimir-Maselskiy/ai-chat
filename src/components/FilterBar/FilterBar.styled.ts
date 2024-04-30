import styled from 'styled-components';
import { Flex } from 'antd';

interface IProps {
  theme: 'light' | 'dark';
}

export const FilterBarStyled = styled(Flex)<IProps>`
  justify-content: space-between;
  min-height: 140px;
  padding: 20px;
  flex-direction: column;
  background-color: ${props =>
    props.theme === 'light' ? ' #f5f5f5' : '#1e1f5a'};
  border-bottom: 1px solid #ccc;
  min-width: 100%;
`;
