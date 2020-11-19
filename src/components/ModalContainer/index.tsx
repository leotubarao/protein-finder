import React from 'react';
import { useTransition } from 'react-spring';

import Modal from './Modal';

import { Container } from './styles';

interface ModalContainerProps {
  state: boolean;
  style: object;
}

const ModalContainer: React.FC<ModalContainerProps> = ({ state, style }) => {
  const modalWithTransitions = useTransition(state, null, {
    from: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <Container style={style}>
      {modalWithTransitions.map(
        ({ item, key, props }) => item && <Modal key={key} style={props} />,
      )}
    </Container>
  );
};

export default ModalContainer;
