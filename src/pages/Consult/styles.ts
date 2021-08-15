import styled from 'styled-components';

import { breakpoint, colors } from '../../styles/configs';

export const Form = styled.form`
  display: flex;

  margin-top: 20px;
  max-width: 700px;

  @media (min-width: ${breakpoint.lg.min}) {
    margin-top: 40px;
  }

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px;
    color: ${colors.grays.g0};
    border: 2px solid ${colors.white};

    @media (max-width: ${breakpoint.xs.max}) {
      text-align: center;
    }

    &::placeholder {
      color: ${colors.grays.g2};
    }
  }
`;
