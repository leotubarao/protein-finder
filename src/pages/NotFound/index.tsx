import React from 'react';
import { RiArrowLeftLine } from 'react-icons/ri';
import { ReactComponent as LogoProteinFinder } from '../../assets/logo-protein-finder.svg';

import { Container, Button } from './styles';

const NotFound: React.FC = () => (
  <Container>
    <LogoProteinFinder />
    <h2>404</h2>
    <h3>Esta página não foi encontrada.</h3>
    <Button to="/">
      <RiArrowLeftLine />
      Voltar para Home
    </Button>
  </Container>
);

export default NotFound;
