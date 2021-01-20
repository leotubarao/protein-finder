import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import Button from '../Button';

import { Container } from './styles';

interface FloatButtonProps {
  to: string;
}

const FloatButton: React.FC<FloatButtonProps> = ({ to, ...rest }) => {
  if (to === '/wishlist')
    return (
      <Button to={to} isFloat {...rest}>
        Lista de desejos
      </Button>
    );

  return (
    <Container to={to} {...rest}>
      <span className="icon">
        <FiArrowLeft size={24} />
      </span>
      <span className="content">Voltar para Home</span>
    </Container>
  );
};

export default FloatButton;
