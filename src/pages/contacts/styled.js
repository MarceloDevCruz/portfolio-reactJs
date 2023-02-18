import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 2rem;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
  }

  @media only screen and (max-width: 600px) {
    font-size: 1.4rem;
    padding: 5rem;
  }

  button {
    border: 1px solid #f0eeee;
    height: 6rem;
    width: 24rem;
    border-radius: 15px;
    margin: 1px auto;
    font-family: inherit;
    font-size: 1.8rem;
    color: #f0eeee;
    background-color: transparent;
    cursor: pointer;
    transition: 100ms;

    @media only screen and (max-width: 450px) {
      height: 4rem;
      width: 18rem;
    }
  }

  p:first-of-type {
    animation: moveRight 0.5s ease-out;
  }

  @keyframes moveRight {
    0% {
      opacity: 0;
      transform: translateX(-12rem);
    }

    80% {
      transform: translateX(3rem);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-top: 0.8rem;
  animation: moveRight 0.5s ease-out;

  @media only screen and (max-width: 1200px) {
    margin-bottom: 2rem;
  }

  li,
  a {
    margin: 1.5rem 0;
    font-weight: 500;
  }

  a {
    padding: 0.5rem 1.2rem;
    cursor: pointer;
    border: 1px solid #8fc0eb;

    :hover {
      border: none;
      background-color: #8fc0eb;
      color: black;
    }
  }

  @keyframes moveRight {
    0% {
      opacity: 0;
      transform: translateX(-12rem);
    }

    80% {
      transform: translateX(3rem);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
`;

export const Curriculum = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: moveLeft 0.5s ease-out;

  button {
    margin-top: 2rem;
  }

  @keyframes moveLeft {
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
`;
