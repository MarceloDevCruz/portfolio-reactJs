import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.7rem;
  }

  button {
    display: inline-block;
    border: 1px solid #8fc0eb;
    color: #f0eeee;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }
`;
