import styled from 'styled-components';

export const Container = styled.section`
  grid-row: 1/2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8rem 6rem 0;
`;

export const ProjectContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);
`;
