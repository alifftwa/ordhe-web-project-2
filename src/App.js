import React from 'react';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero';
import Variant from './components/Variant';
import Menu from './components/Menu';
import Footer from './components/Footer';



const App = () => {
  return (
    <div className='bg-gradient-to-b from-white to-red-200'>
      <Navbar />
      <Hero />
      <Variant />
      <Menu />
      <Footer />
      {/* <Header /> */}
    </div>
  );
};

export default App;