import React from 'react';
import GearDisplayView from './components/GearDisplay/GearDisplayContainer'
import HeroSelectorView from './components/HeroSelector/HeroSelectorContainer'
import './App.css';
import { Grid, Box } from '@material-ui/core';
import { MuiThemeProvider } from 'material-ui/styles';

function App() {
  return (
    <MuiThemeProvider>
      <Box>
        <GearDisplayView></GearDisplayView>
      </Box>

      <Box>
        <HeroSelectorView></HeroSelectorView>
      </Box>
  </MuiThemeProvider>
  );
}

export default App;
