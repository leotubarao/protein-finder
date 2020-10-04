import React from 'react';
import { ReactComponent as LogotypeProteinFinder } from '../../assets/logotype-protein-finder.svg';

import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <LogotypeProteinFinder />
    <span className="sr-only">Protein Finder</span>
  </Container>
);

export default Header;
