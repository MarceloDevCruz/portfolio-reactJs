import React from 'react';
import { GlobalStyled, Background, Container } from './GlobalStyled';
import Menu from './components/menu/Menu';
import About from './components/about/About';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <GlobalStyled />
      <Background>
        <Container>
          <Menu />
          <About />
          <Footer />
        </Container>
      </Background>
    </>
  );
}

export default App;
