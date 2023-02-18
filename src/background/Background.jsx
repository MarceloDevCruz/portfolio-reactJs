import React from 'react';
import { BsCircle } from 'react-icons/bs';

import { Container, Ring1, Ring2, Ring3, Ring4 } from './styled';

const Background = () => {
  return (
    <Container>
      <Ring1>
        <BsCircle />
      </Ring1>
      <Ring2>
        <BsCircle />
      </Ring2>
      <Ring3>
        <BsCircle />
      </Ring3>
      <Ring4>
        <BsCircle />
      </Ring4>
    </Container>
  );
};

export default Background;
