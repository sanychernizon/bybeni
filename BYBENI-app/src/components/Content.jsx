import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Catalog from "./Catalog";
import Home from "./Home";
import ProductPage from "./ProductPage";
import Checkout from "./Checkout";

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
            qtdItemsInCart={this.props.cartSelectedItems.length}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/moda-masculina/:categoryName"
              render={props => <Catalog props={props} />}
            />
            <Route
              path="/p/:productId"
              render={props => (
                <ProductPage props={props} addToCart={this.props.addToCart} />
              )}
            />
            <Route
              path="/checkout"
              render={props => <Checkout props={props} cartSelectedItems={this.props.cartSelectedItems} />}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default Content;
