import React from 'react';
import GearDisplayView from './components/GearDisplay/GearDisplayContainer'
import HeroSelectorView from './components/HeroSelector/HeroSelectorContainer'
import './App.css';
import { Box } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header>

      </header>
      <body>
        <GearDisplayView></GearDisplayView>
        <Box>
          <HeroSelectorView></HeroSelectorView>
        </Box>
      </body>
    </div>
  );
}

export default App;
