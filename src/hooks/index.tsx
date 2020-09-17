import React from 'react';

import { ProductProvider } from './product';

const AppProvider: React.FC = ({ children }) => (
  <ProductProvider>{children}</ProductProvider>
);

export default AppProvider;
