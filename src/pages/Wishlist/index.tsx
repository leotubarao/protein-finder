import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';

import Header from '../../components/Header';
import Product from '../../components/Products/Product';
import FloatButton from '../../components/FloatButton';
import Discount from '../../components/ModalContainer/Discount';

import { Products } from './styles';
import { useProduct } from '../../hooks/product';

const Wishlist: React.FC = () => {
  const { wishlist } = useProduct();

  return (
    <>
      <FloatButton to="/" icon={BsArrowLeft} />
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
