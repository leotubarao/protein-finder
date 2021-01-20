import styled from 'styled-components';

import { breakpoint, colors } from '../../styles/configs';

export const Container = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  .products-wrapper {
    width: 100%;
    max-width: 800px;
  }

  @media (max-width: ${breakpoint.xs.max}) {
    margin-top: 40px;
  }
`;

export const Error = styled.span`
  display: block;
  color: ${colors.red};
  margin-top: 10px;
`;
