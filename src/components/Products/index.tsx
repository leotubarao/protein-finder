import React, { HTMLAttributes } from 'react';
import { useLocation } from 'react-router-dom';

import { ProductState, useProduct } from '../../hooks/product';
import { useModal } from '../../hooks/modal';

import Full from './Cosultant/Full';
import Slim from './Cosultant/Slim';
import WishlistResume from '../WishlistResume';

import { Container, Error } from './styles';

interface ProductProps extends HTMLAttributes<HTMLElement> {
  content: ProductState[] | null;
}

const Products: React.FC<ProductProps> = ({ content, ...rest }) => {
  const { totalProduct } = useProduct();
  const { pathname } = useLocation();

  const { discount } = useModal();

  const switchList = discount !== 1 || pathname === '/';

  return (
    <Container {...rest}>
      <div className="products-wrapper">
        {content && content.length !== 0 ? (
          content.map((product) => (
            <>
              {switchList ? (
                <Slim
                  key={product.codigo}
                  item={{ product, quantity: totalProduct(product) }}
                />
              ) : (
                <Full
                  key={product.codigo}
                  item={{ product, quantity: totalProduct(product) }}
                />
              )}
            </>
          ))
        ) : (
          <Error>Não encontramos nada!</Error>
        )}
      </div>
      <WishlistResume />
    </Container>
  );
};

export default Products;
