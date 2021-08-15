import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  FormEvent,
} from 'react';
import { isMobile } from 'react-device-detect';
import { useLocation, useHistory } from 'react-router-dom';

import { Form } from './styles';
import { ProductState, useProduct } from '../../hooks/product';

import Header from '../../components/Header';
import Products from '../../components/Products';
import Button from '../../components/Button';
import Discount from '../../components/ModalContainer/Discount';

type ProductKey = keyof ProductState;

const Consult: React.FC = () => {
  const [fieldForm, setFieldForm] = useState('');
  const { products, wishlist } = useProduct();
  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    const { innerHeight } = window;
    const { clientHeight } = document.body;

    if (!isMobile) {
      if (innerHeight > clientHeight) {
        document.body.classList.add('large');
      } else {
        document.body.classList.remove('large');
      }
    }
  }, [fieldForm]);

  const handleFindProduct = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      setFieldForm(fieldForm);
    },
    [fieldForm],
  );

  const productsFiltered = useMemo(() => {
    if (!products) return null;

    const sanitizedString = (str: string): string =>
      str
        .toLowerCase()
        .normalize('NFD')
        .replace(/([^0-9a-zA-Z ])/g, '');

    const keys = ['codigo', 'nome'] as const;

    if (fieldForm === 'ltco') {
      history.push('/consultant');
      setFieldForm('');
    }

    const filterProducts = products.filter((product: ProductState) =>
      keys.some((key: ProductKey) =>
        sanitizedString(product[key]).includes(sanitizedString(fieldForm)),
      ),
    );

    return filterProducts as ProductState[];
  }, [products, fieldForm, history]);

  return (
    <>
      {wishlist.length !== 0 && <Button to="/wishlist" />}
      {pathname !== '/' && <Discount />}

      <Header />

      <Form onSubmit={handleFindProduct}>
        <input
          placeholder="Digite o código/nome do produto"
          value={fieldForm}
          onChange={(e) => setFieldForm(e.target.value)}
        />
      </Form>

      <Products content={productsFiltered} />
    </>
  );
};

export default Consult;
