import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useTransition } from 'react-spring';

import ModalContainer from '../components/ModalContainer';
import Discount from '../components/ModalContainer/Discount';

interface ModalContextData {
  discount: number;
  addModal(): void;
  removeModal(): void;
  filterDiscount(disc: number): void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalProvider: React.FC = ({ children }) => {
  const [modal, setModal] = useState(() => {
    const storageWishlistProducts = localStorage.getItem(
      '@ProteinFinder:discount',
    );

    if (storageWishlistProducts) return false;

    return true;
  });

  const [discount, setDiscount] = useState(() => {
    const storageWishlistProducts = localStorage.getItem(
      '@ProteinFinder:discount',
    );

    if (storageWishlistProducts) return JSON.parse(storageWishlistProducts);

    return 1;
  });

  useEffect(() => {
    localStorage.setItem('@ProteinFinder:discount', JSON.stringify(discount));
  }, [discount]);

  useEffect(() => {
    const bodyClass = document.body.classList;

    if (modal) {
      bodyClass.add('modal-opened');
    } else {
      bodyClass.remove('modal-opened');
    }
  }, [modal]);

  const addModal = useCallback(() => {
    setModal(true);
  }, []);

  const removeModal = useCallback(() => {
    setModal(false);
  }, []);

  const filterDiscount = useCallback(
    (disc: number) => {
      if (disc !== discount) {
        setDiscount(disc);
        removeModal();
      }
    },
    [discount, removeModal],
  );

  const modalWithTransitions = useTransition(modal, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <ModalContext.Provider
      value={{ discount, addModal, removeModal, filterDiscount }}
    >
      {children}
      <Discount />
      {modalWithTransitions.map(
        ({ item, key, props }) =>
          item && <ModalContainer key={key} style={props} state={modal} />,
      )}
    </ModalContext.Provider>
  );
};

function useModal(): ModalContextData {
  const context = useContext(ModalContext);

  if (!context)
    throw new Error('useModal must be used within an ModalProvider.');

  return context;
}

export { ModalProvider, useModal };
