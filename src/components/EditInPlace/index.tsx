/* eslint-disable react/no-children-prop */
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { ProductState, WishlistState } from '../../hooks/product';

interface InputProps {
  value: WishlistState;
  viewAs?: string;
  onChangeValue: (item: ProductState, total: number) => void;
}

const EditInPlace: React.FC<InputProps> = ({
  value: { product, quantity },
  onChangeValue,
  viewAs,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState(false);

  const edit = useCallback(() => {
    setIsEditing(true);
  }, []);

  const done = useCallback(() => {
    if (inputRef.current) {
      const { value } = inputRef.current;

      if (+value !== quantity) onChangeValue(product, +value);
    }

    setIsEditing(false);
  }, [onChangeValue, product, quantity]);

  useEffect(() => {
    if (isEditing && inputRef.current) inputRef.current.focus();
  }, [isEditing]);

  if (isEditing)
    return (
      <input
        type="number"
        min="0"
        defaultValue={quantity}
        ref={inputRef}
        onBlur={done}
      />
    );

  return React.createElement(viewAs || 'span', {
    onClick: edit,
    className: 'quantity',
    children: quantity,
  });
};

export default EditInPlace;
