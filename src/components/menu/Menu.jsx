import React, { useState } from 'react';
import { BsList } from 'react-icons/bs';
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
            <li>Sobre min</li>
            <li>Skills</li>
            <li>Projetos</li>
            <li>Contatos</li>
          </ul>
          <BsList onClick={handleOpen} />
        </MenuContainer>
      )}
    </>
  );
};

export default Menu;
