import React from 'react';
import { FiX } from 'react-icons/fi';

import { ReactComponent as LogotypeProteinFinder } from '../../../assets/logotype-protein-finder.svg';
import { useModal } from '../../../hooks/modal';

import { Container } from './styles';

interface ModalProps {
  style: object;
}

const Modal: React.FC<ModalProps> = ({ style }) => {
  const { removeModal } = useModal();

  return (
    <Container style={style}>
      <header>
        <button className="close" onClick={() => removeModal()} type="button">
          <FiX size={18} />
        </button>
        <LogotypeProteinFinder />
      </header>

      <p>Escolha qual porcentagem você deseja visualizar?</p>
    </Container>
  );
};

export default Modal;
