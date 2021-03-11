import React from 'react';
import { useHistory } from 'react-router-dom';
import { useLastLocation } from 'react-router-last-location';

import { useProduct } from '../../hooks/product';
import { useModal } from '../../hooks/modal';

import Header from '../../components/Header';
import GoBack from '../../components/GoBack';

import Full from '../../components/Products/Cosultant/Full';
import Slim from '../../components/Products/Cosultant/Slim';
import Discount from '../../components/ModalContainer/Discount';

import { Products } from './styles';

const Wishlist: React.FC = () => {
  const history = useHistory();
  const lastLocation = useLastLocation();

  const { wishlist } = useProduct();
  const { discount } = useModal();

  const isHome = lastLocation && lastLocation.pathname === '/';
  const hasDiscount = discount !== 1;

  if (wishlist.length === 0) history.push('/');

  return (
    <>
      <GoBack consultant={hasDiscount || !isHome} />
      {!isHome && <Discount />}

      <Header />

      <Products>
        {wishlist &&
          wishlist.map((item) => (
            <>
              {hasDiscount || isHome ? (
                <Slim key={item.product.codigo} item={item} />
              ) : (
                <Full key={item.product.codigo} item={item} />
              )}
            </>
          ))}
      </Products>
    </>
  );
};

export default Wishlist;
