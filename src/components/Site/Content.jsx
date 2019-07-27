import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import Catalog from "./Catalog";
import Home from "./Home";
import ProductPage from "./ProductPage";
import Checkout from "./Checkout";
import Identify from "./Identify";
import Register from "./Register";
import Footer from "./Footer";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegister: false
    };
  }

  isRegister = bool => {
    this.setState({ isRegister: bool });
  };

  renderRedirect = () => {
    if (this.props.userIsLoged) {
      return <Redirect to="/" />;
    }
  };

  render() {
    return (
      <div
        className={
          this.props.menuIsOpen ? "main-content main-on" : "main-content"
        }
      >
        <main>
          {this.renderRedirect()}
          {window.location.href === "http://localhost:3000/checkout" ? (
            ""
          ) : (
            <NavBar
              menuBtnFunc={this.props.menuFunc}
              menuIsOpen={this.props.menuIsOpen}
              cartBtnFunc={this.props.cartFunc}
              qtdItemsInCart={this.props.cartSelectedItems.length}
            />
          )}
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Home props={props} checkUserIsLoged={this.props.checkUserIsLoged} />
              )}
            />
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
              render={props => (
                <Checkout
                  props={props}
                  cartSelectedItems={this.props.cartSelectedItems}
                  userLoged={this.props.userLoged}
                />
              )}
            />
            <Route
              path="/identify"
              render={props => (
                <Identify
                  props={props}
                  isRegister={this.state.isRegister}
                  userLogedFunc={this.props.userLogedFunc}
                />
              )}
            />
            <Route
              path="/register"
              render={props => (
                <Register props={props} isRegister={this.isRegister} />
              )}
            />
          </Switch>
          {window.location.pathname === "/checkout" ? "" : <Footer />}
        </main>
      </div>
    );
  }
}

export default Content;
