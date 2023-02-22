import React from 'react';
import Skill from '../skills_card/Skill';

import { Container, Links } from './styled';

const Project = ({ project }) => {
  return (
    <>
      <Container>
        {project.image && <img src={project.image} alt={project.name} />}
        <h2>{project.name}</h2>
        <div>
          <p>{project.mini_descript}</p>
        </div>
        <div>
          {project.skills.map((card, index) => (
            <Skill skill={card} key={index} />
          ))}
        </div>
        <Links>
          <p>{project.about}</p>
          {project.links.map((link, i) => (
            <a key={i} target="_blank" href={link}>
              {project.link_name[i]}
            </a>
          ))}
        </Links>
      </Container>
    </>
  );
};

export default Project;
