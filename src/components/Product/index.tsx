import React, { HTMLAttributes } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import { WishlistState, useProduct } from '../../hooks/product';
import EditInPlace from '../EditInPlace';

import { Container } from './styles';

interface ProductProps extends HTMLAttributes<HTMLElement> {
  item: WishlistState;
}

const Product: React.FC<ProductProps> = ({ item, ...rest }) => {
  const { addWishlist, removeWishlist, inputWishlist } = useProduct();

  const { product, quantity } = item;

  return (
    <Container {...rest}>
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

      <div className="wrapper-quantity">
        <button type="button" onClick={() => addWishlist(product)}>
          <FiChevronUp size={30} />
        </button>
        <EditInPlace value={item} onChangeValue={inputWishlist} />
        <button
          type="button"
          disabled={quantity === 0}
          onClick={() => removeWishlist(product)}
        >
          <FiChevronDown size={30} />
        </button>
      </div>
    </Container>
  );
};

export default Product;
