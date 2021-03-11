import React, { HTMLAttributes } from 'react';
import { useLocation } from 'react-router-dom';

import { WishlistState, ProductState } from '../../../../hooks/product';
import { useModal } from '../../../../hooks/modal';
import Quantity from '../../Quantity';

import { Container } from './styles';

interface ProductProps extends HTMLAttributes<HTMLElement> {
  item: WishlistState;
}

type ProductKey = keyof ProductState;

const Slim: React.FC<ProductProps> = ({ item, ...rest }) => {
  const { product } = item;
  const { pathname } = useLocation();
  const { discount } = useModal();
  const discPercent = `desc${discount}` as ProductKey;

  return (
    <Container {...rest}>
      <div className="description">
        <span>{product.categoria}</span>
        <strong className="title">{product.nome}</strong>
        <span>{product.codigo}</span>
        <hr />
      </div>

      <div className="info">
        {pathname !== '/' && discount !== 1 ? (
          <>
            <span>
              PV: <strong>{product.pv}</strong>
            </span>
            <span>
              Base para cálculo: <strong>{product.ref}</strong>
            </span>
            <s>{product.bruto}</s>
            <strong>{product[discPercent]}</strong>
          </>
        ) : (
          <>
            <span>
              PV: <strong>{product.pv}</strong>
            </span>
            <strong>{product.bruto}</strong>
          </>
        )}
      </div>

      <Quantity item={item} />
    </Container>
  );
};

export default Slim;
