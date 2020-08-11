import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

const breakpoint = {
  xs: {
    max: '575.98px',
  },
  sm: {
    min: '576px',
    max: '767.98px',
  },
  md: {
    min: '768px',
    max: '991.98px',
  },
  lg: {
    min: '992px',
    max: '1199.98px',
  },
  xl: {
    min: '1200px',
  },
};

const colors = {
  green: '#0B5742',
  red: '#c53030',
  grays: {
    g0: '#3a3a3a',
    g1: '#cbcbd6',
    g2: '#a8a8b3',
    g3: '#737380',
    g4: '#6c6c80',
    g5: '#3d3d4d',
  },
  white: '#FFF',
};

export const Title = styled.h1`
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

  div.product-wrapper {
    display: flex;
    align-items: center;
    background-color: ${colors.white};
    width: 100%;
    padding: 24px;
    border-radius: 5px;
    text-decoration: none;
    transition: box-shadow 200ms ease-in-out;

    &:hover {
      box-shadow: 0 14px 35px -12px ${colors.grays.g2}4d;
    }

    & + * {
      margin-top: 20px;
    }
  }

  div.description {
    flex: 1;
    font-size: 12px;
    color: ${colors.grays.g2};

    > strong {
      display: block;
      font-size: 20px;
      color: ${colors.grays.g5};
      margin: 8px 0 0;
    }

    hr {
      border: 0;
      border-top: 1px solid ${colors.grays.g5};
      opacity: 0.3;
      margin: 15px 0;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      margin-top: -15px;
      margin-left: -15px;

      li {
        list-style: none;
        margin-top: 15px;
        margin-left: 15px;
        font-size: 14px;

        /* &.refColumn {
          flex: 1;
          & + * {
            @media (max-width: ${breakpoint.xs.max}) {
            }
          }
        } */

        strong {
          display: block;
          color: ${colors.grays.g3};
        }
      }
    }
  }

  div.quantity {
    /* display: flex; */
    flex-direction: column;
    justify-self: flex-end;
    margin-left: 16px;
    display: none;
  }

  button {
    background-color: transparent;
    width: 40px;
    height: 40px;
    border: 0;

    svg {
      margin-left: auto;
      transition: color 200ms ease-in-out;
      color: ${colors.grays.g1};
    }

    &.inative {
      opacity: 0.5;
    }

    &:hover:not(.inative) svg {
      color: ${shade(0.2, colors.grays.g1)};
    }
  }
`;
