import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bulma/css/bulma.css'
import './App.css';

import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  return (

    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/cheeses" component={Cheeses} />
      <Route path="/cheeses/:id" component={SingleCheese} />  */}
    </Switch>

  </BrowserRouter>
  );
}

export default App;
