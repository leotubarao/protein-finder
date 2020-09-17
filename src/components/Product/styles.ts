import styled from 'styled-components';
import { shade } from 'polished';

import { breakpoint, colors } from '../../styles/configs';

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
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

  div.wrapper-quantity {
    display: flex;
    flex-direction: column;
    justify-self: flex-end;
    align-items: center;
    margin-left: 16px;

    > span.quantity {
      background-color: ${colors.green};
      color: ${colors.white};
      font-size: 14px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    > input {
      background-color: ${colors.white};
      color: ${colors.grays.g4};
      border: ${colors.grays.g4} solid 2px;
      border-radius: 5px;
      padding: 2px 4px;
      text-align: center;
      width: 40px;
    }
  }

  button {
    background-color: transparent;
    width: 40px;
    height: 40px;
    border: 0;

    svg {
      margin-left: auto;
      transition: color 200ms ease-in-out;
      color: ${colors.grays.g2};
    }

    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    &:hover:not(.inative) svg {
      color: ${shade(0.2, colors.grays.g2)};
    }
  }
`;
