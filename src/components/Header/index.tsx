import React from 'react';
import { RiUserSearchLine } from 'react-icons/ri';

import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <RiUserSearchLine />
    Protein Finder
  </Container>
);

export default Header;
