import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  FormEvent,
} from 'react';
import { isMobile } from 'react-device-detect';
import { BsViewList } from 'react-icons/bs';

import { Form, Error } from './styles';
import { ProductState, useProduct } from '../../hooks/product';

import Header from '../../components/Header';
import Products from '../../components/Products';
import FloatButton from '../../components/FloatButton';

type ProductKey = keyof ProductState;

const Dashboard: React.FC = () => {
  const [fieldForm, setFieldForm] = useState('');
  const [inputError, setInputError] = useState('');
  const { products } = useProduct();

  const handleFindProduct = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!fieldForm) {
        setInputError('Digite o código/nome do produto.');
        return;
      }

      setFieldForm(fieldForm);

      setInputError('');
    },
    [fieldForm],
  );

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

  const productsFiltered = useMemo(() => {
    if (!products) return null;

    const sanitizedString = (str: string): string =>
      str
        .toLowerCase()
        .normalize('NFD')
        .replace(/([^0-9a-zA-Z ])/g, '');

    const keys = ['codigo', 'nome'] as const;

    const filterProducts = products.filter((product: ProductState) =>
      keys.some((key: ProductKey) =>
        sanitizedString(product[key]).includes(sanitizedString(fieldForm)),
      ),
    );

    return filterProducts as ProductState[];
  }, [products, fieldForm]);

  return (
    <>
      <FloatButton to="/wishlist" icon={BsViewList} side="right" />

      <Header />
      <Form hasError={!!inputError} onSubmit={handleFindProduct}>
        <input
          placeholder="Digite o código/nome do produto"
          value={fieldForm}
          onChange={(e) => setFieldForm(e.target.value)}
        />
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Products content={productsFiltered} />
    </>
  );
};

export default Dashboard;
