import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Catalog from "./Catalog";
import Home from "./Home";

class Content extends Component {
  render() {
    return (
      <div
        className={
          this.props.menuIsOpen ? "main-content main-on" : "main-content"
        }
      >
        <main>
          <NavBar
            menuBtnFunc={this.props.menuFunc}
            menuIsOpen={this.props.menuIsOpen}
            cartBtnFunc={this.props.cartFunc}
          />
          <section class="content-container">
            <Switch>
              <Route path="/" component={Home} />
              <Route
                path="/category/:categoryName"
                render={props => <Catalog props={props} />}
              />
            </Switch>
          </section>
        </main>
      </div>
    );
  }
}

export default Content;
