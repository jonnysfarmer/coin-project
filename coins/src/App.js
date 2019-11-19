import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bulma'
import './styles/style.scss'
import './App.css';

import Navbar from './components/Navbar'
import Home from './components/Home'
import Coins from './components/Coins'

function App() {
  return (

    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/coins" component={Coins} />
      {/* <Route path="/cheeses/:id" component={SingleCheese} />  */}
    </Switch>

  </BrowserRouter>
  );
}

export default App;
