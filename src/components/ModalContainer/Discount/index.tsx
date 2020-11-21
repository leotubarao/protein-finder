import React from 'react';
import { FiPercent } from 'react-icons/fi';
import { useModal } from '../../../hooks/modal';

import { Container } from './styles';

const Discount: React.FC = () => {
  const { discount, addModal } = useModal();

  return (
    <Container onClick={addModal}>
      {discount === 1 ? <FiPercent size={24} /> : `${discount}%`}
    </Container>
  );
};

export default Discount;
