import { createGlobalStyle } from 'styled-components';
import { breakpoint, colors, sizeScroll } from './configs';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  *::-moz-selection,
  *::selection {
    background-color: ${colors.grays.g4};
    color: #fff;
  }

  ::-webkit-scrollbar {
    width: 0.5em;
    height: 0.5em;
  }
  ::-webkit-scrollbar-button {
    width: 8px;
    height: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${colors.grays.g1};
    box-shadow: 0px 0px 3px #dfdfdf inset;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${colors.grays.g3};
    border: thin solid gray;
    border-radius: 10px;

    &:hover {
      background-color: ${colors.grays.g3};
    }
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
      max-width: 800px;
    }
  }

  body.large {
    padding-right: ${sizeScroll}px;
  }

  body.modal-opened {
    padding-right: ${sizeScroll}px;
    overflow: hidden;
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
