import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FooterStyled, ReactIcons } from './styled';

const Footer = () => {
  return (
    <FooterStyled>
      <div>
        <p>Marcelo Ferreira Cruz</p>
      </div>
      <ReactIcons>
        <a target="_blank" href="https://github.com/MarceloDevCruz">
          <BsGithub />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/marcelo-ferreira-cruz/"
        >
          <BsLinkedin />
        </a>
      </ReactIcons>
    </FooterStyled>
  );
};

export default Footer;
