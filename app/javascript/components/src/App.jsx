import React from 'react';
import GearDisplayView from './modules/GearDisplay/GearDisplayContainer'
import HeroSelectorView from './modules/HeroSelector/HeroSelectorContainer'
import './App.css';
import { MuiThemeProvider } from 'material-ui/styles';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <MuiThemeProvider>
        <Provider store={store}>
            <header className="App-header">
              <GearDisplayView></GearDisplayView>
              <HeroSelectorView></HeroSelectorView>
            </header>
      </Provider>
    </MuiThemeProvider>
    </div>
  );
}

export default App;