import styled from 'styled-components';

import { breakpoint } from '../../styles/configs';

export const Products = styled.div`
  margin-top: 80px;
  max-width: 800px;

  @media (max-width: ${breakpoint.xs.max}) {
    margin-top: 40px;
  }
`;
