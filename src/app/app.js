import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AppNavbar from '../app-navbar';
import Grid from '../grid-example';
import './app.css';

function App() {
  return (
    <div className="App">
      <Router basename="/">
          <header className="App-header">
            <AppNavbar/>
            <Grid/>
          </header>
      </Router>
    </div>
  );
}

export default App;
