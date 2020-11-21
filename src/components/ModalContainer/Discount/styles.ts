import styled from 'styled-components';

import { colors } from '../../../styles/configs';

export const Container = styled.span`
  background-color: ${colors.red};
  width: 60px;
  height: 60px;
  border-radius: 50%;

  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  color: ${colors.white};
  font-size: 24px;

  transition: transform 200ms ease-in-out;

  svg {
    margin: auto;
    color: ${colors.white};
  }

  &:hover {
    transform: translateY(-3px);
  }
`;
