import styled from 'styled-components';

export const Container = styled.section`
  grid-row: 1/2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 22rem 0;

  @media only screen and (max-width: 1700px) {
    padding: 8rem 10rem 0;
  }

  @media only screen and (max-width: 600px) {
    padding: 8rem 5rem 0;
  }

  @media only screen and (max-width: 400px) {
    padding: 8rem 1rem 0;
  }
`;

export const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media only screen and (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
