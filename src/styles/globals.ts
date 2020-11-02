import { createGlobalStyle } from 'styled-components';
import { breakpoint, colors } from './configs';

const { innerWidth } = window;
const { clientWidth } = document.body;

const sizeScroll = innerWidth - clientWidth;

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #F0F0F5;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root {
    max-width: ${breakpoint.xl.min};
    margin: 0 auto;
    padding: 40px 20px;

    @media (max-width: ${breakpoint.lg.max}) {
      max-width: ${breakpoint.lg.min};
    }
  }

  body.large {
    padding-right: ${sizeScroll}px
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  a.teste {
    width: 100%;
    background-color: ${colors.grays.g4};
    color: ${colors.white};
    font-size: 20px;
    height: 60px;
    padding: 16px 20px;
    border: 0;
    text-transform: uppercase;
    text-decoration: none;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;

    transition: background-color 200ms ease-in-out;

    &:hover {
      background-color: ${colors.green};
    }

    .quantity {
      background-color: ${colors.red};
      color: ${colors.white};
      font-size: 14px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      pointer-events: none;
    }
  }
`;
