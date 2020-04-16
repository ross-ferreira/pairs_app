import React from 'react';
import { HashRouter as Router, Route,Switch } from "react-router-dom";
import Cards from './components/old/Cards'
import './App.css';
import CardsNew from './components/CardsNew';

const App = () => (
  <React.Fragment>
  <Router>
    {/* <Header/> */}
    <Route exact path="/">
    <header>
    <h1>
      Pairs Game
    </h1>
  </header>
  {/* <Cards/> */}
  <CardsNew/>
    </Route>
  </Router>
</React.Fragment>
  );

export default App;
