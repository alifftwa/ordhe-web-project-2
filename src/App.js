import React from 'react';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero';
import Variant from './components/Variant';
import Menu from './components/Menu';


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Variant />
      <Menu />
      {/* <Header /> */}
    </div>
  );
};

export default App;