import styled from 'styled-components';

export const Container = styled.section`
  grid-row: 1/2;

  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  font-size: 1.8rem;

  @media only screen and (max-width: 1200px) {
    font-size: 1.4rem;
  }

  @media only screen and (max-width: 900px) {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5rem;
  }

  img {
    grid-column: 1/2;
    grid-row: 2/-1;
    max-width: 30rem;
    justify-self: center;
    align-self: center;
    animation: moveRight 0.5s ease-out;

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

    @media only screen and (max-width: 900px) {
      max-width: 15rem;
    }
  }

  h2 {
    color: #8fc0eb;
  }
`;

export const AboutMy = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  justify-self: center;
  align-self: center;
  padding: 6rem;
  animation: moveRight 0.5s ease-out;

  @media only screen and (max-width: 900px) {
    padding: 2rem;
  }

  @media only screen and (max-width: 700px) {
    font-size: 0.9rem;
  }

  @media only screen and (max-width: 450px) {
    font-size: 0.8rem;
    margin-bottom: 2rem;
    padding: 0;
  }
`;

export const History = styled.div`
  grid-column: 2/-1;
  grid-row: 1/-1;
  padding: 2rem;
  justify-self: center;
  align-self: center;
  animation: moveLeft 0.5s ease-out;

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

  @media only screen and (max-width: 450px) {
    font-size: 1rem;
    margin-top: 2rem;
  }
`;
