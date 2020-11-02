import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';

import Header from '../../components/Header';
import Product from '../../components/Products/Product';
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

/* import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';

import Header from '../../components/Header';
import Products from '../../components/Products';
import FloatButton from '../../components/FloatButton';

import { useProduct } from '../../hooks/product';

const Wishlist: React.FC = () => {
  const { wishlist } = useProduct();

  return (
    <>
      <FloatButton to="/" icon={BsArrowLeft} side="left" />

      <Header />

      <Products content={wishlist} />
    </>
  );
};

export default Wishlist;
*/
