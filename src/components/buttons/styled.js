import styled from 'styled-components';

export const Container = styled.div`
  font-size: 5rem;
  cursor: pointer;
  position: fixed;
  top: 50%;
  left: ${(props) => (props.side === 'left' ? '3%' : '97%')};
  z-index: 10;
`;
