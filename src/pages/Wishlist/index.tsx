import React from 'react';
// import { isMobile } from 'react-device-detect';
import { BsArrowLeft } from 'react-icons/bs';

import Product from '../../components/Product';
import Header from '../../components/Header';
import FloatButton from '../../components/FloatButton';

import { Products } from './styles';
import { useProduct } from '../../hooks/product';

const Wishlist: React.FC = () => {
  const { wishlist } = useProduct();

  return (
    <>
      <FloatButton to="/" icon={BsArrowLeft} side="left" />

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
