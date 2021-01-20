import styled from 'styled-components';

import { breakpoint, colors } from '../../../styles/configs';

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
`;
