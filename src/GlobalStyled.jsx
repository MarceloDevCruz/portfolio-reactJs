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

  ::-webkit-scrollbar {
  width: 7px;
  height: 7px;
  }

  ::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
  }

  ::-webkit-scrollbar-thumb {
  background: #8fc0eb;
  border: 0px none #f0eeee;
  border-radius: 20px;
  }

  ::-webkit-scrollbar-track {
  background: #8fc0eb;
  border: 0px none #f0eeee;
  border-radius: 50px;
  }

  ::-webkit-scrollbar-corner {
  background: transparent;
  }

  @keyframes vectorAnimation {
      0% {
        transform: scale(1);
        overflow: hidden;
      }

      25% {
        transform: scale(1.1);
      }

      50% {
        transform: scale(1.2);
      }

      75% {
        transform: scale(1.1);
      }

      100% {
        transform: scale(1);
      }
    }

    @keyframes moveRight {
    0% {
      opacity: 0;
      transform: translateX(-12rem);
    }

    80% {
      transform: translateX(3rem);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }

  @keyframes moveLeft {
    0% {
      opacity: 0;
      transform: translateX(12rem);
    }

    80% {
      transform: translateX(-3rem);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
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
  position: relative;
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
