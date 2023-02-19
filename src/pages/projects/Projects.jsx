import React, { useState } from 'react';

import { projects } from '../../projects/projects';
import { Link } from 'react-router-dom';
import { Container } from './styled';

import Button from '../../components/buttons/Button';
import Project from '../../components/project/Project';

const Projects = () => {
  return (
    <Container>
      {projects.map((project) => (
        <Project project={project} key={project.id} />
      ))}
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
