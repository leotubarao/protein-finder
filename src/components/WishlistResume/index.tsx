import React, { useMemo } from 'react';

import { useProduct } from '../../hooks/product';

import { Container, List, Button } from './styles';

const ListBox: React.FC = () => {
  const { wishlist } = useProduct();
  const totalProducts = useMemo(() => {
    return Object.values(wishlist).reduce(
      (acc, { quantity }) => acc + quantity,
      0,
    );
  }, [wishlist]);

  return (
    <>
      <List>
        {wishlist.map(({ product, quantity }) => (
          <div className="item" key={product.codigo}>
            <span>{quantity}</span>
            <p>{product.nome}</p>
          </div>
        ))}
      </List>
      <span className="quantity">
        {totalProducts > 99 ? '99+' : totalProducts}
      </span>
      <Button to="/wishlist">Lista de desejos</Button>
    </>
  );
};

const Empty: React.FC = () => {
  return (
    <div className="empty">
      <span>=(</span>
      No momento não há nenhum produto adicionado.
    </div>
  );
};

const WishlistResume: React.FC = () => {
  const { wishlist } = useProduct();
  const wishlistCondition = wishlist.length !== 0;

  return <Container>{wishlistCondition ? <ListBox /> : <Empty />}</Container>;
};

export default WishlistResume;
