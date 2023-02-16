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
  background-image: linear-gradient(
    10deg,
    black,
    #050505,
    #0c0c0c,
    #050505,
    black
  );

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  animation: menuNav 0.5s ease-out;

  @keyframes menuNav {
    0% {
      opacity: 0;
      transform: translateX(12rem);
    }

    80% {
      transform: translateX(-3rem);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }

  li {
    font-size: 2rem;
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
