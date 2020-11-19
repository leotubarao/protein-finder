import styled from 'styled-components';
import { animated } from 'react-spring';

import { colors } from '../../../styles/configs';

export const Container = styled(animated.div)`
  background-color: ${colors.grays.g5};
  width: 100%;
  max-width: 600px;
  border-radius: 5px;
  padding: 80px 2rem;
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.white};

  header {
    button.close {
      background-color: transparent;
      color: currentColor;
      padding: 10px;
      border: 0;
      appearance: none;
      opacity: 0.5;
      position: absolute;
      top: 5px;
      right: 5px;
      display: flex;
    }
  }

  p {
    max-width: 270px;
    margin-top: 40px;
    margin-bottom: 24px;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  }
`;
