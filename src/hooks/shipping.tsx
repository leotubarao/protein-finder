import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

import sheetsApi from '../services/sheetsApi';

interface ShippingState {
  min: string;
  max: string;
  residencial: string;
  retirada: string;
}

interface ShippingContextData {
  shipping: ShippingState[];
  getShipping: (total: number) => number;
}

const ShippingContext = createContext<ShippingContextData>(
  {} as ShippingContextData,
);

const ShippingProvider: React.FC = ({ children }) => {
  const [shipping, setShipping] = useState<ShippingState[]>([]);

  useEffect(() => {
    sheetsApi().then(async (res) => {
      const rowsShipping = await res.sheetsByIndex[1].getRows();

      const shippingReturn = rowsShipping.map(
        ({ min, max, residencial, retirada }) => {
          return {
            min,
            max,
            residencial,
            retirada,
          };
        },
      );

      setShipping(shippingReturn);
    });
  }, []);

  // Returns shipping based on the value of the products
  const getShipping = useCallback((total: number) => {
    return total;
  }, []);

  return (
    <ShippingContext.Provider
      value={{
        shipping,
        getShipping,
      }}
    >
      {children}
    </ShippingContext.Provider>
  );
};

function useShipping(): ShippingContextData {
  const context = useContext(ShippingContext);

  if (!context)
    throw new Error('useShipping must be within an ShippingProvider.');

  return context;
}

export { ShippingProvider, useShipping };
