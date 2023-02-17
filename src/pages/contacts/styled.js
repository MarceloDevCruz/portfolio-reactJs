import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 2rem;

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
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-top: 0.8rem;

  li,
  a {
    margin: 0.8rem 0;
    font-weight: 500;
  }

  a {
    cursor: pointer;
  }
`;

export const Curriculum = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
