import React, { useMemo } from 'react';
import { IconBaseProps } from 'react-icons';
import { useProduct } from '../../hooks/product';

import { Container, Total } from './styles';

interface FloatButtonProps {
  to: string;
  icon: React.ComponentType<IconBaseProps>;
  side?: 'left' | 'right';
}

const FloatButton: React.FC<FloatButtonProps> = ({
  to,
  icon: Icon,
  side = 'right',
}) => {
  const { wishlist } = useProduct();
  const totalProducts = useMemo(() => {
    return Object.values(wishlist).reduce(
      (acc, { quantity }) => acc + quantity,
      0,
    );
  }, [wishlist]);

  return (
    <Container to={to} side={side}>
      <Icon size={24} />
      {totalProducts > 0 && to === '/wishlist' && (
        <Total>{totalProducts > 9 ? '9+' : totalProducts}</Total>
      )}
    </Container>
  );
};

export default FloatButton;
