import React from 'react';
import { HashRouter as Router, Route,Switch } from "react-router-dom";


import './App.css';

import CardsNew from './components/CardsNew';
import ScorePage from './components/ScorePage';
import Header from './components/Header';
import HeaderHome from './components/HeaderHome';
import WelcomePage from './components/WelcomePage';

const App = () => (
  <React.Fragment>
  <Router>
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
