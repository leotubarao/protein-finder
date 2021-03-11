import React from 'react';
import { LastLocationProvider } from 'react-router-last-location';

import { ModalProvider } from './modal';
import { ProductProvider } from './product';

const AppProvider: React.FC = ({ children }) => (
  <LastLocationProvider>
    <ModalProvider>
      <ProductProvider>{children}</ProductProvider>
    </ModalProvider>
  </LastLocationProvider>
);

export default AppProvider;
