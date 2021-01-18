import styled from 'styled-components';

import { breakpoint, colors } from '../../../styles/configs';

export const Container = styled.span`
  background-color: ${colors.red};
  width: 45px;
  height: 45px;
  border-radius: 50%;

  position: fixed;
  top: 10px;
  left: 50%;
  margin-left: -22.5px;
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  color: ${colors.white};

  transition: transform 200ms ease-in-out;

  @media (min-width: ${breakpoint.lg.min}) {
    width: 60px;
    height: 60px;
    top: 15px;
    margin-left: -30px;
    font-size: 24px;
  }

  svg {
    margin: auto;
    color: ${colors.white};

    @media (max-width: ${breakpoint.md.max}) {
      max-width: 20px;
    }
  }

  &:hover {
    transform: translateY(-3px);
  }
`;
