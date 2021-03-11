import styled from 'styled-components';

import { breakpoint, colors } from '../../../../styles/configs';

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${colors.white};
  width: 100%;
  padding: 16px 24px;
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

      @media (min-width: ${breakpoint.lg.min}) {
        display: none;
      }
    }
  }

  div.info {
    min-width: 160px;

    @media (min-width: ${breakpoint.lg.min}) {
      margin-left: 16px;
      order: 1;
      text-align: right;
    }

    > * {
      display: block;
      color: ${colors.grays.g2};
    }

    > s,
    > strong {
      font-weight: bold;
      font-size: 24px;
    }

    > strong {
      color: ${colors.grays.g5};
    }

    span {
      font-size: 12px;

      strong {
        color: ${colors.grays.g3};
      }
    }
  }
`;
