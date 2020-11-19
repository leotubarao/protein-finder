import styled from 'styled-components';
import { rgba } from 'polished';

import { animated } from 'react-spring';

import { colors } from '../../styles/configs';

export const Container = styled(animated.div)`
  background-color: ${rgba(colors.grays.g5, 0.6)};
  position: fixed;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  overflow: hidden;

  backdrop-filter: blur(5px);
`;
