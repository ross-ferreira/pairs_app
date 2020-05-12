import React, { Fragment } from "react";
import { HashRouter as Router, Route,Switch } from "react-router-dom";

// import { Router,Route } from "react-router-dom";

// use Router instead of BrowserRouter

import '../../App.css';
import CardsNew from '../CardsNew';
import ScorePage from '../ScorePage';
import Header from '../Header';
import HeaderHome from '../HeaderHome';
import WelcomePage from '../WelcomePage';
import Footer from '../Footer';
// import history from "../src/history";

class App extends React.Component{

  // componentDidMount(){
  //   this.props.getDataSet();
  // }

  render(){
    return(
      <Fragment>
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
        <Footer/>
      </Router>
    </Fragment>
    )
  }
};

export default App;
