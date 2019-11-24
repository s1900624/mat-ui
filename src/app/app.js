import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppNavbar from '../app-navbar';
import Grid from '../grid-example';
import Contact from '../contact';
import './app.css';

function App() {
  return (
    <div className="App">
      <Router basename="/">
          <Switch>
              <Route exact path="/">
                  <header className="App-header">
                      <AppNavbar/>
                      <Grid/>
                  </header>
              </Route>
              <Route path="/contact">
                  <AppNavbar/>
                  <Contact />
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
