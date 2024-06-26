import styled from 'styled-components';

interface IProps {
  type: 'incoming' | 'outgoing';
}

export const MessageTimeStyled = styled.div<IProps>`
  position: absolute;
  display: inline;
  bottom: 0;
  white-space: nowrap;
  font-size: 12px;
  color: #767676;
  right: ${props => {
    return props.type === 'outgoing' ? '0' : '100%';
  }};
  ${props => {
    return props.type !== 'outgoing'
      ? 'transform: translate(100%, 120%);'
      : 'transform: translate(0%, 120%);';
  }};
  align-items: center;
`;
