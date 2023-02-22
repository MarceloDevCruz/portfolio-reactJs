import React from 'react';
import { Container, AboutMy, History } from './styled';
import vector from '../../assets/img/vector-history-img.png';
import { Link } from 'react-router-dom';

import Button from '../../components/buttons/Button';

const About = () => {
  return (
    <Container>
      <AboutMy>
        <h1>
          Guarulhos, São Paulo, <span>Marcelo Ferreira Cruz</span>
        </h1>
        <p>
          Olá, sou <strong>Marcelo Ferreira Cruz</strong>, desenvolvedor web e
          estudante do Instituto Federal de Educação, Ciência e Tecnologia de
          São Paulo (IFSP). eu tenho conhecimentos sobre tecnologias como Sass,
          ReactJs e NodeJs, e estou especializando no curso de Análise e
          Desenvolvimento de Sistemas. Além disso, tenho grande paixão por
          desenvolvimento de software, o que me motiva a se aprofundar cada vez
          mais em meus estudos.
        </p>
      </AboutMy>
      <img src={vector} alt="Vector" />
      <History>
        <p>
          Estou a procura de uma oportunidade para me tornar um desenvolvedor, o
          meu foco atualmente é no desenvolvimento Web, porém estou aberto para
          qualquer oportunidade que me derem, tanto no backend, fullstack,
          infraestrutura ou devOps.
        </p>
      </History>
      <Link to="/skills">
        <Button side={'right'} />
      </Link>
    </Container>
  );
};

export default About;
