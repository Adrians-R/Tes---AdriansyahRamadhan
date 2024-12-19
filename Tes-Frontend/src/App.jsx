import React from 'react';
import Header from './components/Header';
import HeroSection from './components//HeroSection';
import FeaturedProducts from './components//FeaturedProducts';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FeaturedProducts />
    </div>
  );
};

export default App;
