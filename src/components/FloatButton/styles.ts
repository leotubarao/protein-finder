import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { breakpoint, colors } from '../../styles/configs';

export const Container = styled(Link)`
  background-color: ${colors.grays.g5};
  width: 45px;
  height: 45px;
  border: 0;
  border-radius: 50%;

  display: flex;
  position: fixed;
  top: 15px;
  left: 15px;
  z-index: 1000;

  transition: background-color 200ms ease-in-out;

  @media (min-width: ${breakpoint.lg.min}) {
    width: 60px;
    height: 60px;
  }

  svg {
    margin: auto;
    color: ${colors.white};

    @media (max-width: ${breakpoint.md.max}) {
      max-width: 20px;
    }
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
