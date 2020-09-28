import React from 'react';
import { RiArrowLeftLine, RiUserSearchLine } from 'react-icons/ri';

import { Container, Button } from './styles';

const NotFound: React.FC = () => (
  <Container>
    <RiUserSearchLine />
    <h2>404!</h2>
    <Button to="/">
      <RiArrowLeftLine />
      Voltar
    </Button>
  </Container>
);

export default NotFound;
