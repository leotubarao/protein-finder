import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  FormEvent,
} from 'react';
import { isMobile } from 'react-device-detect';
import { BsViewList } from 'react-icons/bs';

import { Form, Error, Products } from './styles';
import { useProduct } from '../../hooks/product';

import Product from '../../components/Product';
import Header from '../../components/Header';
import FloatButton from '../../components/FloatButton';

const Dashboard: React.FC = () => {
  const [fieldForm, setFieldForm] = useState('');
  const [inputError, setInputError] = useState('');
  const { products, totalProduct } = useProduct();

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
    const keys = ['codigo', 'nome'];

    const sanitizedString = (str: string): string =>
      str
        .toLowerCase()
        .normalize('NFD')
        .replace(/([^0-9a-zA-Z ])/g, '');

    // eslint-disable-next-line
    return products.filter((product: any) =>
      keys.some((key: string) =>
        sanitizedString(product[key]).includes(sanitizedString(fieldForm)),
      ),
    );
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

      <Products>
        {productsFiltered &&
          productsFiltered.map((product) => (
            <Product
              key={product.codigo}
              item={{ product, quantity: totalProduct(product) }}
            />
          ))}
      </Products>
    </>
  );
};

export default Dashboard;
