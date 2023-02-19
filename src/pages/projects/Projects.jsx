import React, { useState, useEffect } from 'react';

import { data } from '../../data/data';
import { Link } from 'react-router-dom';
import { Container, ProjectContainer } from './styled';

import Button from '../../components/buttons/Button';
import Project from '../../components/project/Project';
import Pagination from '../../components/pagination/Pagination';

const Projects = () => {
  const [offSet, setOffSet] = useState(0);
  const limit = 2;
  const total = data.length;

  return (
    <Container>
      <ProjectContainer>
        {data
          .filter((project, i) => i >= offSet && i < offSet + limit)
          .map((project) => (
            <Project project={project} key={project.id} />
          ))}
      </ProjectContainer>
      <Pagination
        limit={limit}
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
