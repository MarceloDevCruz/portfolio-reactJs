import React, { useState } from 'react';
import { Container, List, Curriculum } from './styled';

import { Link } from 'react-router-dom';
import Button from '../../components/buttons/Button';

const Contacts = () => {
  return (
    <Container>
      <div>
        <p>Entre em contato comigo atráves das minhas redes sociais</p>
        <List>
          <li>
            <a
              href="https://www.linkedin.com/in/marcelo-ferreira-cruz/"
              target="_blank"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=5511969784354"
              target="_blank"
            >
              Whatsapp
            </a>
          </li>
          <li>
            <a href="mailto:marcelo.cruzf11@gmail.com" target="_blank">
              E-mail
            </a>
          </li>
        </List>
      </div>

      <Curriculum>
        <p>Faça download do meu curriculo</p>
        <a
          href="Currículo Marcelo Ferreira Cruz.pdf"
          download="Marcelo Ferreira Cruz - Frontend"
        >
          <button>Download</button>
        </a>{' '}
      </Curriculum>
      <Link to="/projects">
        <Button side={'left'} />
      </Link>
    </Container>
  );
};

export default Contacts;
