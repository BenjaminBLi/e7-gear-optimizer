import React from 'react';
import GearDisplayView from './modules/GearDisplay/GearDisplayContainer'
import HeroSelectorView from './modules/HeroSelector/HeroSelectorContainer'
import './App.css';
import { Box } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GearDisplayView></GearDisplayView>
        <Box>
          <HeroSelectorView></HeroSelectorView>
        </Box>
      </header>
    </div>
  );
}

export default App;
