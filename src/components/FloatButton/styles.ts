import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { breakpoint, colors } from '../../styles/configs';

export const Container = styled(Link)`
  background-color: ${colors.grays.g5};
  width: 45px;
  height: 45px;
  padding: 15px;
  border: 0;
  border-radius: 50%;
  color: ${colors.white};
  font-size: 20px;
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;

  display: flex;
  align-items: center;
  position: fixed;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;

  transition: all 200ms ease-in-out;

  @media (min-width: ${breakpoint.lg.min}) {
    width: 60px;
    height: 60px;
  }

  .icon {
    display: flex;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    transition: all 200ms ease-in-out;

    svg {
      @media (max-width: ${breakpoint.md.max}) {
        max-width: 20px;
      }
    }
  }

  .content {
    min-width: 160px;
    transition: all 200ms ease-in-out;
    transform: translateX(-150%);
    opacity: 0;
  }

  &:hover {
    background-color: ${colors.green};
    width: 220px;
    border-radius: 5px;

    .icon {
      left: 0;
      transform: translateX(0);
    }

    .content {
      transform: translateX(8px);
      opacity: 1;
    }
  }
`;
