import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Hardskills, Softskills } from './styled';

import Button from '../../components/buttons/Button';

const Skills = () => {
  return (
    <Container>
      <Hardskills>
        <li>Desenvolvimento Web</li>
        <li>UX UI</li>
        <li>API Rest</li>
        <li>ReactJs</li>
        <li>sass</li>
        <li>NodeJs</li>
      </Hardskills>
      <Softskills>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
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
