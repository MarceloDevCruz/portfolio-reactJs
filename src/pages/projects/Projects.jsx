import React, { useState } from 'react';

import { projects } from '../../projects/projects';
import { Link } from 'react-router-dom';
import { Container } from './styled';

import Button from '../../components/buttons/Button';

const Projects = () => {
  return (
    <Container>
      {' '}
      <div>Projects</div>{' '}
      <Link to="/skills">
        <Button side={'left'} />
      </Link>
      <Link to="/contact">
        <Button side={'right'} />
      </Link>
    </Container>
  );
};

export default Projects;
