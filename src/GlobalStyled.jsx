import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 200;
    letter-spacing: 1.8px;
  }

  html {
    font-size: 62.5%;
  }

  body {
    color: #f0eeee;
    font-size: 1.4rem;
    background-image: linear-gradient(10deg, black, #050505, #0c0c0c, #050505, black);
  }

  ul {
    list-style: none;
  }

  a,
  a:link,
  a:visited {
    text-decoration: none;
    color:#f0eeee;
  }

  button {
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    cursor: pointer;
    background: transparent;
    border: none;
    margin: 0;
    display: inline;
  }
`;

export const Background = styled.div`
  background-image: url('./src/assets/background.svg');
  background-repeat: repeat;
`;

export const Container = styled.div`
  max-width: 180rem;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: grid;
  margin: 0 auto;
  position: relative;
  grid-template-rows: auto 15rem;
`;
