import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 2rem;
  background-image: linear-gradient(
    10deg,
    black,
    #050505,
    #0c0c0c,
    #050505,
    black
  );
  box-shadow: 0 0 5rem black;
  border-radius: 20px;
  font-size: 1.2rem;
  height: 70rem;

  @media only screen and (max-width: 1700px) {
    font-size: 1rem;
  }

  div {
    padding: 0 2rem;
  }

  img {
    width: 100%;
    height: 30vh;
    border-radius: 20px 20px 0 0;
  }

  h2 {
    text-align: center;
    color: #8fc0eb;
  }
`;

export const Card = styled.div``;
