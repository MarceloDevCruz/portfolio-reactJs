import styled from 'styled-components';

export const MenuStyle = styled.div`
  grid-row: 1/2;
  position: fixed;
  top: 2%;
  right: 5%;
  font-size: 5rem;
  cursor: pointer;
  z-index: 10;
`;

export const MenuContainer = styled.div`
  grid-row: 1/-1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  background-color: black;

  display: flex;
  align-items: center;
  justify-content: center;

  li {
    margin: 5rem;
    cursor: pointer;
  }

  svg {
    position: fixed;
    top: 2%;
    right: 5%;
    font-size: 5rem;
    z-index: 30;
    cursor: pointer;
  }
`;
