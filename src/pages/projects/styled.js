import styled from 'styled-components';

export const Container = styled.section`
  grid-row: 1/2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 8rem;
`;

export const ProjectContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  margin: 3rem 0;
  min-height: 60rem;
  justify-content: center;
  align-items: center;
  gap: 7rem;
`;
