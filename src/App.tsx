import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Champions from './components/Champions';
import Technology from './components/Technology';
import Explore from './components/Explore';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <About />
      <Champions />
      <Technology />
      <Explore />
      <Footer />
    </>
  );
};

export default App;
