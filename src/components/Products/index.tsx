import React, { HTMLAttributes } from 'react';

import { ProductState, useProduct } from '../../hooks/product';

import Product from './Product';
import WishlistResume from '../WishlistResume';

import { Container, Error } from './styles';

interface ProductProps extends HTMLAttributes<HTMLElement> {
  content: ProductState[] | null;
}

const Products: React.FC<ProductProps> = ({ content, ...rest }) => {
  const { totalProduct } = useProduct();

  return (
    <Container {...rest}>
      <div className="products-wrapper">
        {content && content.length !== 0 ? (
          content.map((product) => (
            <Product
              key={product.codigo}
              item={{ product, quantity: totalProduct(product) }}
            />
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

/* <Product
  key={product.codigo}
  item={{ product, quantity: totalProduct(product) }}
/>
<Product key={item.product.codigo} item={item} /> */
