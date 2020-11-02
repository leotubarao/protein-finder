import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { breakpoint, colors } from '../../styles/configs';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 320px;
  width: 100%;
  position: sticky;
  top: 30px;

  @media (max-width: ${breakpoint.lg.max}) {
    display: none;
  }

  .quantity {
    background-color: ${colors.red};
    color: ${colors.white};
    font-size: 14px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    margin-top: -9px;
    margin-bottom: -9px;
    pointer-events: none;
  }

  .empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.white};
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    color: ${colors.grays.g2};

    padding: 40px 60px;
    border-radius: 5px;
    text-align: center;

    span {
      color: ${colors.grays.g3};
      transform: rotate(90deg);
    }
  }
`;

export const Button = styled(Link)`
  width: 100%;
  background-color: ${colors.grays.g4};
  color: ${colors.white};
  font-size: 20px;
  height: 60px;
  padding: 16px 20px;
  border: 0;
  border-radius: 5px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;

  transition: background-color 200ms ease-in-out;

  &:hover {
    background-color: ${colors.green};
  }
`;

export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  padding: 18px;
  border-radius: 5px;

  .item {
    display: flex;
    flex-direction: row;
    align-items: center;

    & + * {
      margin-top: 10px;
      border-top: 1px solid ${colors.grays.g1};
      padding-top: 10px;
    }

    span {
      background-color: ${colors.grays.g4};
      color: ${colors.white};
      font-size: 12px;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
    }

    p {
      font-size: 12px;
      color: ${colors.grays.g4};
      flex: 1;
    }
  }
`;
