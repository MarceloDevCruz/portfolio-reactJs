import React, { useState } from 'react';
import { BsList } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { MenuStyle, MenuContainer } from './styled';

const Menu = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      {!open ? (
        <MenuStyle>
          <BsList onClick={handleOpen} />
        </MenuStyle>
      ) : (
        <MenuContainer>
          <ul>
            <Link to="/">
              <li onClick={handleOpen}>Sobre min</li>
            </Link>
            <Link to="/skills">
              <li onClick={handleOpen}>Skills</li>
            </Link>
            <Link to="/projects">
              <li onClick={handleOpen}>Projetos</li>
            </Link>
            <Link to="/contact">
              <li onClick={handleOpen}>Contatos</li>
            </Link>
          </ul>
          <BsList onClick={handleOpen} />
        </MenuContainer>
      )}
    </>
  );
};

export default Menu;
