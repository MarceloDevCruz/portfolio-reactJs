import React from 'react';
import {
  GlobalStyled,
  Background as BackgroundTheme,
  Container,
} from './GlobalStyled';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';
import About from './pages/about/About';
import Contacts from './pages/contacts/Contacts';
import Projects from './pages/projects/Projects';
import Skills from './pages/skills/Skills';
import Background from './background/Background';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyled />
        <BackgroundTheme>
          <Background />
          <Container>
            <Menu />
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/contact" element={<Contacts />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
            <Footer />
          </Container>
        </BackgroundTheme>
      </BrowserRouter>
    </>
  );
}

export default App;
