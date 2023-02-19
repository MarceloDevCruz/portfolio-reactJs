import styled from 'styled-components';

export const Container = styled.div`
  font-size: 5rem;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: ${(props) => (props.side === 'left' ? '1%' : '')};
  right: ${(props) => (props.side === 'right' ? '1%' : '')};
  z-index: 10;

  @media only screen and (max-width: 800px) {
    font-size: 4rem;
  }

  @media only screen and (max-width: 600px) {
    font-size: 3.5rem;
  }
`;
