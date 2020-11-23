import React from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface FloatButtonProps {
  to: string;
  icon: React.ComponentType<IconBaseProps>;
}

const FloatButton: React.FC<FloatButtonProps> = ({ to, icon: Icon }) => {
  return (
    <Container to={to}>
      <Icon size={24} />
    </Container>
  );
};

export default FloatButton;
