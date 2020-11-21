import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

import { colors } from '../../styles/configs';

export const Container = styled.div`
  width: 100%;
  max-width: 300px;
  height: 70px;
  background: ${colors.white};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
`;

interface DropDownProps {
  open: boolean;
}

export const DropDownHeader = styled.div<DropDownProps>`
  color: ${colors.grays.g5};
  font-weight: 700;
  padding: 0 24px;
  margin: auto 0;
  pointer-events: none;
  display: flex;
  justify-content: space-between;

  &:after {
    content: '';
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMzZDNkNGQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biI+PHBvbHlsaW5lIHBvaW50cz0iNiA5IDEyIDE1IDE4IDkiPjwvcG9seWxpbmU+PC9zdmc+');
    width: 24px;
    height: 24px;
    display: block;
    color: currentColor;
    transition: transform 1s ease-in-out;

    ${(props) =>
      props.open &&
      css`
        transform: rotate(-180deg);
      `}
  }
`;

export const DropDownContainer = styled(animated.ul)`
  overflow: hidden;
  position: absolute;
  top: 50%;
  /* transform: translateY(-50%); */
  width: 100%;
  border-radius: 5px;
  background-color: ${colors.white};
`;

export const ListItem = styled.li`
  list-style: none;
  color: ${colors.grays.g5};
  font-weight: 700;
  padding: 12px 24px;
  cursor: pointer;

  transition: background-color 200ms ease-in-out;

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(.disabled) {
    background-color: ${colors.grays.g1};
  }
`;
