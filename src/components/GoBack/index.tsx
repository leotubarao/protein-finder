import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import { Container } from './styles';

interface ButtonProps {
  consultant?: boolean;
}

const FloatButton: React.FC<ButtonProps> = ({ consultant, ...rest }) => (
  <Container to={consultant ? '/consultant' : '/'} {...rest}>
    <span className="icon">
      <FiArrowLeft size={24} />
    </span>
    <span className="content">Voltar para Home</span>
  </Container>
);

export default FloatButton;
