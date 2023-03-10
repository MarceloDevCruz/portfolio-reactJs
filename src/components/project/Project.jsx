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
          <ul>
            {project.links.map((link, i) => (
              <li key={i}>
                <a target="_blank" href={link}>
                  {project.link_name[i]}
                </a>
              </li>
            ))}
          </ul>
        </Links>
      </Container>
    </>
  );
};

export default Project;
