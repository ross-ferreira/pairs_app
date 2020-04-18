import React from 'react';
import { HashRouter as Router, Route,Switch } from "react-router-dom";
// import your history file

// use Router instead of BrowserRouter

import './App.css';

import CardsNew from './components/CardsNew';
import ScorePage from './components/ScorePage';
import Header from './components/Header';
import HeaderHome from './components/HeaderHome';
import WelcomePage from './components/WelcomePage';
import history from "../src/history";

const App = () => (
  <React.Fragment>
  <Router history={ history }>
    <Route exact path="/">
      <HeaderHome/>
      <WelcomePage/>
    </Route>
    <Route exact path="/game">
      <Header/>
      <CardsNew/>
    </Route>
    <Route exact path="/endgame">
      <Header/>
      <ScorePage/>
    </Route>
  </Router>
</React.Fragment>
  );

export default App;
