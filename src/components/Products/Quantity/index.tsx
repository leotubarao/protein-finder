import React, { HTMLAttributes } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import { WishlistState, useProduct } from '../../../hooks/product';
import EditInPlace from '../../EditInPlace';

import { Container } from './styles';

interface ProductProps extends HTMLAttributes<HTMLElement> {
  item: WishlistState;
}

const QuantityButton: React.FC<ProductProps> = ({ item, ...rest }) => {
  const { addWishlist, removeWishlist, inputWishlist } = useProduct();

  const { product, quantity } = item;

  return (
    <Container {...rest}>
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
    </Container>
  );
};

export default QuantityButton;
