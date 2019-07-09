import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Catalog from "./Catalog";
import Home from "./Home";
import ProductPage from "./ProductPage";

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
          <section className="content-container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/moda-masculina/:categoryName"
                render={props => <Catalog props={props} />}
              />
              <Route
                path="/p/:productId"
                render={props => <ProductPage props={props} />}
              />
            </Switch>
          </section>
        </main>
      </div>
    );
  }
}

export default Content;
