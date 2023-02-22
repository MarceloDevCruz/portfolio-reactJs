import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Hardskills, Softskills } from './styled';
import { HiLightBulb } from 'react-icons/hi';
import { BsFillGearFill } from 'react-icons/bs';

import Button from '../../components/buttons/Button';

const Skills = () => {
  return (
    <Container>
      <Hardskills>
        <h3>Hard skills</h3>
        <HiLightBulb />
        <ul>
          <li>Desenvolvimento Web</li>
          <li>UX UI</li>
          <li>API Rest</li>
          <li>ReactJs</li>
          <li>sass</li>
          <li>NodeJs</li>
        </ul>
      </Hardskills>
      <Softskills>
        <h3>Soft skills</h3>
        <BsFillGearFill />
        <ul>
          <li>Comunicação</li>
          <li>Autodidatismo</li>
          <li>Flexibilidade</li>
          <li>Resiliência</li>
          <li>Organização</li>
        </ul>
      </Softskills>
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
