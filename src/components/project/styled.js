import styled from 'styled-components';

export const Container = styled.div`
  margin: 4rem 2rem 0;
  background-image: linear-gradient(
    10deg,
    black,
    #050505,
    #0c0c0c,
    #050505,
    black
  );
  box-shadow: 0 0 5rem black;
  font-size: 1.4rem;
  height: 58.5rem;
  overflow-y: auto;

  @media only screen and (max-width: 1700px) {
    font-size: 1.3rem;
  }

  div {
    padding: 0 2rem;
    margin-bottom: 1rem;
  }

  img {
    width: 100%;
    max-height: 25vh;

    @media only screen and (max-height: 1050px) {
      max-height: 27rem;
    }
  }

  h2 {
    text-align: center;
    color: #8fc0eb;
  }
`;

export const Links = styled.div`
  margin-top: 2rem;

  p {
    margin-bottom: 1rem;
  }

  a {
    display: block;
    color: white;
    font-weight: 200;
    letter-spacing: 2.2px;
    text-transform: capitalize;
  }
`;
