import React from 'react';
import { HashRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './components/home/home';
import ExactConverter from './components/exact-converter/exact-converter'
import HomeIcon from './components/icons/home';
import './App.scss'; //loading bootstrap from here

export default function App() {
  return (
    <Router>
       <div className="main-box">
        <nav className="bottom-menu">
            <Link to="/"><HomeIcon/></Link>
        </nav>

        <Switch>
          <Route path="/conversion-exacta">
            <ExactConverter />
          </Route>
          <Route path="/conversion-al-cambio">
            <ExchangeConver />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function ExchangeConver() {
  return <h2>conversion-al-cambio</h2>;
}
