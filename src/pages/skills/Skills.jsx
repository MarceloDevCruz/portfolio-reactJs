import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styled';

import Button from '../../components/buttons/Button';

const Skills = () => {
  return (
    <Container>
      {' '}
      <div>Skills</div>{' '}
      <Link to="/">
        <Button side={'left'} />
      </Link>
      <Link to="/projects">
        <Button side={'right'} />
      </Link>
    </Container>
  );
};

export default Skills;
