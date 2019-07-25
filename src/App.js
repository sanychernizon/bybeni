import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./css/App.css";
import "./css/App-mobile.css";
import "./css/Admin.css";
import Site from "./Site";
import Admin from "./Admin";
import './css/main.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Site} />
        <Route exact path="/admin" component={Admin} />
      </div>
    );
  }
}

export default App;
