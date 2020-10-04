import { createGlobalStyle } from 'styled-components';
import { breakpoint } from './configs';

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
`;
