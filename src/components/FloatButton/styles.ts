import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from '../../styles/configs';

interface ButtonProps {
  side?: 'left' | 'right';
}

export const Container = styled(Link)<ButtonProps>`
  background-color: ${colors.grays.g5};
  width: 60px;
  height: 60px;
  border: 0;
  border-radius: 50%;

  display: flex;
  position: fixed;
  top: 15px;
  z-index: 1000;

  ${({ side }) =>
    side === 'left'
      ? css`
          left: 15px;
        `
      : css`
          right: 15px;
        `}

  transition: background-color 200ms ease-in-out;

  svg {
    margin: auto;
    color: ${colors.white};
  }

  &:hover {
    background-color: ${colors.grays.g4};
  }
`;

export const Total = styled.span`
  background-color: ${colors.red};
  color: ${colors.white};
  font-size: 14px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -10px;
  left: -10px;
`;
