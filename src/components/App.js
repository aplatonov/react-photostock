import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Appbar from './Appbar.js';
import CategoryButtons from './CategoryButtons.js';
import AdvancedGridList from './AdvancedGridList.js';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Appbar />
        <CategoryButtons />
        <AdvancedGridList />
      </React.Fragment>
    );
  }
}

export default App;;