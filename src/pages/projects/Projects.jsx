import React, { useState, useEffect } from 'react';

import { data } from '../../data/data';
import { Link } from 'react-router-dom';
import { Container } from './styled';

import Button from '../../components/buttons/Button';
import Project from '../../components/project/Project';
import Pagination from '../../components/pagination/Pagination';

const Projects = () => {
  const [offSet, setOffSet] = useState(0);
  const limite = 4;
  const total = data.length;

  return (
    <Container>
      {data
        .filter((project, i) => i >= offSet && i < offSet + limite)
        .map((project) => (
          <Project project={project} key={project.id} />
        ))}
      <Pagination
        limit={limite}
        total={total}
        offSet={offSet}
        setOffSet={setOffSet}
      />
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
