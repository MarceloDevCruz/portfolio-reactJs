import React from 'react';
import { Container, List, Curriculum } from './styled';

const Contacts = () => {
  return (
    <Container>
      <div>
        <p>Entre em contato comigo atráves de meus contatos</p>
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
        <button> Download</button>
      </Curriculum>
    </Container>
  );
};

export default Contacts;
