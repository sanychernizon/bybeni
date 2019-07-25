import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Orders from "./Orders";
import Costumers from "./Costumers";
import Catalog from "./Catalog";

class Content extends Component {
  render() {
    return (
      <main className="container-admin">
        <Switch>
          <Route exact path="/admin/" component={Dashboard} />
          <Route exact path="/admin/orders" component={Orders} />
          <Route exact path="/admin/costumers" component={Costumers} />
          <Route exact path="/admin/catalog" component={Catalog} />
        </Switch>
      </main>
    );
  }
}

export default Content;
