import styled from 'styled-components';

export const Container = styled.section`
  grid-row: 1/2;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-self: center;
  padding: 0 30rem;

  font-size: 2.8rem;

  @media only screen and (max-width: 1500px) {
    padding: 0 15rem;
    font-size: 2.4rem;
  }

  @media only screen and (max-width: 1000px) {
    padding: 0 7rem;
    font-size: 2rem;
  }

  @media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 3rem 5rem;
    font-size: 1.6rem;
  }

  @media only screen and (max-width: 350px) {
    font-size: 1.4rem;
  }

  h3 {
    color: #8fc0eb;
    font-weight: 400;
    letter-spacing: 5px;
    text-transform: uppercase;
    margin-bottom: 1.3rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  li {
    list-style: circle;
    margin: 1.5rem;
  }
`;

export const Hardskills = styled.div`
  grid-column: 1/2;
  justify-self: center;

  svg {
    font-size: 6rem;
    color: yellow;
    animation: lightAnimation 3s infinite;
    animation-timing-function: cubic-bezier(1, 0, 0.5, 1);

    @media only screen and (max-width: 1500px) {
      font-size: 5rem;
    }

    @media only screen and (max-width: 1000px) {
      font-size: 4rem;
    }

    @media only screen and (max-width: 700px) {
      font-size: 3rem;
    }
  }
`;

export const Softskills = styled.div`
  grid-column: 2/-1;
  justify-self: center;

  @media only screen and (max-width: 700px) {
    margin-top: 5rem;
  }

  svg {
    font-size: 6rem;
    color: grey;
    animation: rotate 3s infinite;
    animation-timing-function: cubic-bezier(1, 0, 0.5, 1);

    @media only screen and (max-width: 1500px) {
      font-size: 5rem;
    }

    @media only screen and (max-width: 1000px) {
      font-size: 4rem;
    }

    @media only screen and (max-width: 700px) {
      font-size: 3rem;
    }
  }
`;
