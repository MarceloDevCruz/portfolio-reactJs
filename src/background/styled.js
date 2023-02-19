import styled from 'styled-components';

export const Container = styled.div`
  color: #8fc0eb;
  position: fixed;
`;

export const Ring1 = styled.div`
  font-size: 8rem;
  position: fixed;
  top: -5%;
  left: -2%;
  filter: drop-shadow(10px 20px 40px #8fc0eb);
`;

export const Ring2 = styled.div`
  font-size: 13rem;
  position: fixed;
  top: -3%;
  left: 83%;
  z-index: -10;
  filter: drop-shadow(10px 20px 30px #8fc0eb);
`;

export const Ring3 = styled.div`
  font-size: 11rem;
  position: fixed;
  top: 92%;
  left: -5%;
  z-index: -10;
  filter: drop-shadow(10px 20px 50px #8fc0eb);
`;
