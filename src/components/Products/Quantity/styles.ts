import styled from 'styled-components';
import { shade } from 'polished';

import { colors } from '../../../styles/configs';

export const Container = styled.div`
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
`;
