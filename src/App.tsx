import React from 'react';
import GearDisplayView from './modules/GearDisplay/GearDisplayContainer'
import HeroSelectorView from './modules/HeroSelector/HeroSelectorContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GearDisplayView></GearDisplayView>
        <HeroSelectorView></HeroSelectorView>
      </header>
    </div>
  );
}

export default App;
