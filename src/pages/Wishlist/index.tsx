import React from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import Product from '../../components/Products/Product';
import FloatButton from '../../components/FloatButton';
import Discount from '../../components/ModalContainer/Discount';

import { Products } from './styles';
import { useProduct } from '../../hooks/product';

const Wishlist: React.FC = () => {
  const { wishlist } = useProduct();
  const history = useHistory();

  if (wishlist.length === 0) history.push('/');

  return (
    <>
      <FloatButton to="/" />
      <Discount />

      <Header />

      <Products>
        {wishlist &&
          wishlist.map((item) => (
            <Product key={item.product.codigo} item={item} />
          ))}
      </Products>
    </>
  );
};

export default Wishlist;
