import styled from 'styled-components';

export const FooterStyled = styled.footer`
  grid-row: 2/-1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10rem;

  @media only screen and (max-width: 315px) {
    flex-direction: column;
  }

  div {
    margin-left: 0.5rem;
  }
`;

export const ReactIcons = styled.div`
  font-size: 2.5rem;

  svg {
    margin: 1.5rem;
    cursor: pointer;
    transition: 0.1s all ease-in;
  }

  svg:hover {
    transform: scale(1.5);
  }
`;
