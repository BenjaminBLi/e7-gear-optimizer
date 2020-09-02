import React from 'react';
import GearDisplayView from './components/GearDisplay/GearDisplayContainer'
import HeroSelectorView from './components/HeroSelector/HeroSelectorContainer'
import './App.css';
import { Box } from '@material-ui/core';
import { MuiThemeProvider } from 'material-ui/styles';

function App() {
  return (
    <MuiThemeProvider>
        <div className="App">
            <GearDisplayView></GearDisplayView>
            <Box>
              <HeroSelectorView></HeroSelectorView>
            </Box>
        </div>
  </MuiThemeProvider>
  );
}

export default App;
