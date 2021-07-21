import React from 'react';
import './App.css';
import NavBar from './Components/Navbar'
import HeroSection from './Components/HeroSection';
import FeatureSection from './Components/FeatureSection';
import CardSection from './Components/CardSection';
import Card from './Components/Card'
import FooterSection from './Components/Footer';
function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <FeatureSection />
      <CardSection />
      <Card />
      <FooterSection />
    </div>
   
  );
}

export default App;
