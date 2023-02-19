import React from 'react';
import Skill from '../skills_card/Skill';

import { Container, Card } from './styled';

const Project = ({ project }) => {
  return (
    <>
      <Container>
        <img src={project.image} alt={project.name} />
        <h2>{project.name}</h2>
        <div>
          <p>{project.mini_discript}</p>
          <p>{project.descript}</p>
          <p>{project.project}</p>
        </div>
        <Card>
          {project.skills.map((card, index) => (
            <Skill key={index} />
          ))}
        </Card>
      </Container>
    </>
  );
};

export default Project;
