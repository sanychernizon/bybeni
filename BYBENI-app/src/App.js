import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import {
  Cart,
  NavBar,
  Menu,
  Footer,
  ProductList
} from './components';

class App extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Menu />
        <Cart />
        <Switch>
          <Route path="/category/:categoryName" render={(props) => (<ProductList props={props} />)} />
        </Switch>
        <Footer />
      </div>
    );
  }

}

export default App;
