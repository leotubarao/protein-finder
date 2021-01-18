import styled from 'styled-components';

import { breakpoint, colors } from '../../styles/configs';

export const Container = styled.h1`
  display: flex;
  margin-top: 40px;
  color: ${colors.grays.g0};

  @media (max-width: ${breakpoint.xs.max}) {
    margin-top: 0;

    svg {
      margin-left: auto;
      margin-right: auto;
      max-width: 280px;
    }
  }
`;
