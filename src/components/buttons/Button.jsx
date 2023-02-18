import React from 'react';
import { Container } from './styled';

import { BsChevronCompactRight, BsChevronCompactLeft } from 'react-icons/bs';

const Button = ({ side }) => {
  return (
    <Container side={side}>
      {side === 'right' ? (
        <BsChevronCompactRight side={side} />
      ) : (
        <BsChevronCompactLeft />
      )}
    </Container>
  );
};

export default Button;
