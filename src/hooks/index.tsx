import React from 'react';

import { ModalProvider } from './modal';
import { ProductProvider } from './product';

const AppProvider: React.FC = ({ children }) => (
  <ModalProvider>
    <ProductProvider>{children}</ProductProvider>
  </ModalProvider>
);

export default AppProvider;
