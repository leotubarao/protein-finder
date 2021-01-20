import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { breakpoint, colors } from '../../styles/configs';

interface ButtonProps {
  float?: boolean;
}

export const Container = styled(Link)<ButtonProps>`
  width: 100%;
  background-color: ${colors.grays.g4};
  color: ${colors.white};
  font-size: 20px;
  height: 60px;
  padding: 16px 20px;
  border: 0;
  border-radius: 5px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;

  transition: background-color 200ms ease-in-out;

  &:hover {
    background-color: ${colors.green};
  }

  &.hidden {
    @media (min-width: ${breakpoint.xl.min}) {
      display: none;
    }
  }

  ${(props) =>
    props.float &&
    css`
      width: 300px;
      position: fixed;
      bottom: 15px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1000;
    `}
`;
