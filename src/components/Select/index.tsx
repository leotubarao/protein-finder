/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useTransition } from 'react-spring';

import { useModal } from '../../hooks/modal';
import {
  Container,
  DropDownHeader,
  DropDownContainer,
  ListItem,
} from './styles';

interface SelectProps {
  options: number[];
}

const Select: React.FC<SelectProps> = ({ options }) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { discount, filterDiscount } = useModal();

  const handleClickOutside = useCallback((element, target) => {
    if (element && !element.contains(target)) {
      setIsOpen(false);
    }
  }, []);

  const open = useCallback(() => {
    if (!isOpen) setIsOpen(true);
    const element = selectRef.current;

    document.addEventListener(
      'click',
      (e) => handleClickOutside(element, e.target),
      true,
    );
    return () => {
      document.removeEventListener(
        'click',
        (e) => handleClickOutside(element, e.target),
        true,
      );
    };
  }, [isOpen, handleClickOutside]);

  const transitionElementOptions = {
    from: { transform: 'translate3d(0,-70%,0)', opacity: 0 },
    enter: { transform: 'translate3d(0,-50%,0)', opacity: 1 },
    leave: { transform: 'translate3d(0,-70%,0)', opacity: 0 },
  };

  const elementWithTransitions = useTransition(
    isOpen,
    null,
    transitionElementOptions,
  );

  return (
    <Container ref={selectRef} onClick={open}>
      <DropDownHeader open={isOpen}>
        {discount === 1 ? 'Mostrar tudo' : `${discount}%`}
      </DropDownHeader>
      {elementWithTransitions.map(
        ({ item, key, props }) =>
          item && (
            <DropDownContainer style={props} key={key}>
              {options.map((disc) => (
                <ListItem
                  className={`${discount === disc && 'disabled'}`}
                  onClick={() => filterDiscount(disc)}
                  key={disc}
                >
                  {disc === 1 ? 'Mostrar tudo' : `${disc}%`}
                </ListItem>
              ))}
            </DropDownContainer>
          ),
      )}
    </Container>
  );
};

export default Select;
