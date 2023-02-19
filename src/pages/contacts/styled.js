import styled from 'styled-components';

export const Container = styled.section`
  grid-row: 1/2;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;

  div {
    padding-right: 4rem;
  }

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;

    div {
      padding-right: 0;
    }
  }

  @media only screen and (max-width: 750px) {
    font-size: 1.7rem;
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
    border: 1px solid rgba(10, 173, 251, 0.4);
    border-radius: 6px;

    :hover {
      border: none;
      background-color: #8fc0eb;
      color: black;
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
    :hover {
      transform: scale(1.1);
    }
  }
`;
