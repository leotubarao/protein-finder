import styled, { css } from 'styled-components';

import { breakpoint, colors } from '../../styles/configs';

interface FormProps {
  hasError: boolean;
}

export const Form = styled.form<FormProps>`
  display: flex;

  margin-top: 40px;
  max-width: 700px;

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

    ${(props) =>
      props.hasError &&
      css`
        border-color: ${colors.red};
      `}

    &::placeholder {
      color: ${colors.grays.g2};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: ${colors.red};
  margin-top: 10px;
`;

export const Products = styled.div`
  margin-top: 80px;
  max-width: 800px;

  @media (max-width: ${breakpoint.xs.max}) {
    margin-top: 40px;
  }
`;
