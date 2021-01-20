import React from 'react';

import { Container } from './styles';

interface ButtonProps {
  to: string;
  isFloat?: boolean;
}

const Button: React.FC<ButtonProps> = ({ to, children, isFloat, ...rest }) => {
  return (
    <Container to={to} float={isFloat} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
