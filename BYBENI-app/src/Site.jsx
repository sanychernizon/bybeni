import React, { Component } from "react";
import { Cart, Menu, Content, Overlay } from "./components/Site";
import { BrowserRouter } from "react-router-dom";

class Site extends Component {
  constructor() {
    super();
    this.state = {
      menuIsOpen: false,
      carIsOpen: false,
      cartSelectedItems: []
    };
  }

  toggleMenu = event => {
    let bool = this.state.menuIsOpen;
    if (event) {
      this.setState({ menuIsOpen: !bool });
    }
  };

  toggleCart = event => {
    let bool = this.state.cartIsOpen;
    if (event) {
      this.setState({ cartIsOpen: !bool });
    }
  };

  addToCart = product => {
    let copyCartSelectedItems = [...this.state.cartSelectedItems];
    copyCartSelectedItems.push(product);
    this.setState({ cartSelectedItems: copyCartSelectedItems });
    this.setState({ cartIsOpen: true });
  };

  removeCartSelectedItem = productId => {
    let copyCartSelectedItems = [...this.state.cartSelectedItems];
    function isId(value) {
      return value.id !== productId;
    }
    let newCartSelectedItems = copyCartSelectedItems.filter(isId);
    this.setState({ cartSelectedItems: newCartSelectedItems });
  };

  componentWillMount() { }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Menu menuIsOpen={this.state.menuIsOpen} menuFunc={this.toggleMenu} />
          <Cart
            cartIsOpen={this.state.cartIsOpen}
            cartFunc={this.toggleCart}
            cartRemoveItemFunc={this.removeCartSelectedItem}
            cartSelectedItems={this.state.cartSelectedItems}
          />
          <Content
            menuIsOpen={this.state.menuIsOpen}
            menuFunc={this.toggleMenu}
            cartFunc={this.toggleCart}
            addToCart={this.addToCart}
            cartSelectedItems={this.state.cartSelectedItems}
          />
          <Overlay
            cartIsOpen={this.state.cartIsOpen}
            cartFunc={this.toggleCart}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default Site;
