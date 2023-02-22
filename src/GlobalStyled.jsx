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
  width: .2rem;
  background-color: black;
  border: 0.3rem solid grey;
  }

  ::-webkit-scrollbar-thumb {
  background-color: white;
  border-radius: .5rem;
  border: .3rem solid #8fc0eb;
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

  @keyframes rotate {
    from { -webkit-transform: rotate(0deg) }
    to { -webkit-transform: rotate(360deg) }
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
  background-image: url('./src/assets/img/background.svg');
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
