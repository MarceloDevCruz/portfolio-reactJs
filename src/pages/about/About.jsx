import React from 'react';
import { Container, AboutMy, History } from './styled';
import vector from '../../assets/vector-history-img.png';

const About = () => {
  return (
    <Container>
      <AboutMy>
        <h2>Guarulhos, São Paulo</h2>
        <p>
          Olá, sou Marcelo Ferreira Cruz, um estudante de TI do Instituto
          Federal de Educação, Ciência e Tecnologia de São Paulo (IFSP). eu
          tenho conhecimentos sobre tecnologias como Sass, ReactJs e NodeJs, e
          estou especializando no curso de Análise e Desenvolvimento de
          Sistemas. Além disso, tenho grande paixão por desenvolvimento de
          software, o que me motiva a se aprofundar cada vez mais em meus
          estudos.
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
    </Container>
  );
};

export default About;
