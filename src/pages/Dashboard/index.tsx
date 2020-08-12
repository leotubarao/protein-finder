import React, { useState, useEffect, useCallback, FormEvent } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { RiUserSearchLine } from 'react-icons/ri';

import { Link } from 'react-router-dom';
import productsHLN from '../../data/1596671839581.json';

import { Title, Form, Error, Products } from './styles';

interface ProductHLN {
  categoria: string;
  codigo: string;
  nome: string;
  pv: string;
  bruto: string;
  ref: string;
  desc25: string;
  desc35: string;
  desc42: string;
  desc50: string;
}

const Dashboard: React.FC = () => {
  const [fieldForm, setFieldForm] = useState('');
  const [inputError, setInputError] = useState('');

  const [products, setProducts] = useState<ProductHLN[] | null>([]);

  /* const [wishlist, setWishlist] = useState(() => {
    const storageWishlistProducts = localStorage.getItem(
      '@ProteinFinder:wishlist',
    );

    if (storageWishlistProducts) return JSON.parse(storageWishlistProducts);

    return [];
  });

  useEffect(() => {
    localStorage.setItem('@ProteinFinder:wishlist', JSON.stringify(wishlist));
  }, [wishlist]); */

  const handleFindProduct = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
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
    const keys = ['codigo', 'nome'];

    const findProducts = productsHLN.filter((product: any) =>
      keys.some((key: string) =>
        product[key].toLowerCase().includes(fieldForm.toLowerCase()),
      ),
    );

    setProducts(findProducts);
  }, [fieldForm]);

  return (
    <>
      <Title>
        <RiUserSearchLine />
        Protein Finder
      </Title>
      <Form hasError={!!inputError} onSubmit={handleFindProduct}>
        <input
          placeholder="Digite o código/nome do produto"
          value={fieldForm}
          onChange={(e) => setFieldForm(e.target.value)}
        />
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Link to="/wishlist">Wishlist</Link>

      <Products>
        {products &&
          products.map((product) => (
            <div key={product.codigo} className="product-wrapper">
              <div className="description">
                <span>{product.categoria}</span>
                <strong className="title">{product.nome}</strong>
                <span>{product.codigo}</span>
                <hr />
                <ul>
                  <li>
                    PV
                    <strong>{product.pv}</strong>
                  </li>
                  <li>
                    Valor bruto
                    <strong>{product.bruto}</strong>
                  </li>
                  <li className="refColumn">
                    Base para cálculo de desconto
                    <strong>{product.ref}</strong>
                  </li>
                  <li>
                    25%
                    <strong>{product.desc25}</strong>
                  </li>
                  <li>
                    35%
                    <strong>{product.desc35}</strong>
                  </li>
                  <li>
                    42%
                    <strong>{product.desc42}</strong>
                  </li>
                  <li>
                    50%
                    <strong>{product.desc50}</strong>
                  </li>
                </ul>
              </div>

              <div className="quantity">
                <button type="button">
                  <FiChevronUp size={30} />
                </button>
                <button type="button" className="inative">
                  <FiChevronDown size={30} />
                </button>
              </div>
            </div>
          ))}
      </Products>
    </>
  );
};

export default Dashboard;
