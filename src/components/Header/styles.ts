import styled from 'styled-components';

import { breakpoint, colors } from '../../styles/configs';

export const Container = styled.h1`
  display: flex;
  align-items: center;
  font-size: 48px;
  color: ${colors.grays.g0};
  line-height: 56px;
  margin-top: 80px;

  svg {
    margin-right: 8px;
  }

  @media (max-width: ${breakpoint.xs.max}) {
    font-size: 38px;
    justify-content: center;
    margin-top: 0;
  }
`;
