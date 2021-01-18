import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { tint } from 'polished';
import { breakpoint, colors } from '../../styles/configs';

export const Container = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.grays.g5};

  > svg {
    margin-left: auto;
    margin-right: auto;
  }

  h2 {
    font-size: 40px;

    @media (min-width: ${breakpoint.lg.min}) {
      font-size: 60px;
    }
  }

  > a {
    margin-top: 40px;
  }
`;

export const Button = styled(Link)`
  background-color: ${colors.green};
  border: 0;
  border-radius: 5px;
  display: flex;
  align-items: center;

  color: ${colors.white};
  text-decoration: none;
  padding: 15px 40px;
  padding-left: 32px;

  transition: background-color 200ms ease-in-out;

  svg {
    margin-right: 8px;
    font-size: 20px;
    transition: transform 200ms ease-in-out;
  }

  &:hover {
    background-color: ${tint(0.2, colors.green)};

    svg {
      transform: translateX(-5px);
    }
  }
`;
