import React, { Component } from "react";
import { Cart, Menu, Content, Overlay } from "./components/Site";
import { BrowserRouter } from "react-router-dom";

class Site extends Component {
  constructor() {
    super();
    this.state = {
      menuIsOpen: false,
      cartIsOpen: false,
      cartSelectedItems: [],
      userIsLoged: false,
      userLoged: ""
    };
  }

  logoutUser = () => {
    localStorage.removeItem('user');
    this.setState({userIsLoged: false, userLoged: ''})
  }

  userLoged = user => {
    this.setState({ userLoged: user, userIsLoged: true });
    let userString = JSON.stringify(user)
    localStorage.setItem('user', userString)
  };

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

  componentDidMount(){
    let userLocalStorage = localStorage.getItem('user');
    if(userLocalStorage){
      this.setState({userIsLoged: true})
      let user = JSON.parse(userLocalStorage)
      this.setState({userLoged: user})
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Menu
            menuIsOpen={this.state.menuIsOpen}
            menuFunc={this.toggleMenu}
            user={this.state.userLoged}
            userIsLoged={this.state.userIsLoged}
            logoutUser={this.logoutUser}
          />
          <Cart
            cartIsOpen={this.state.cartIsOpen}
            cartFunc={this.toggleCart}
            cartRemoveItemFunc={this.removeCartSelectedItem}
            cartSelectedItems={this.state.cartSelectedItems}
            userIsLoged={this.state.userIsLoged}
          />
          <Content
            menuIsOpen={this.state.menuIsOpen}
            menuFunc={this.toggleMenu}
            cartFunc={this.toggleCart}
            addToCart={this.addToCart}
            cartSelectedItems={this.state.cartSelectedItems}
            userLogedFunc={this.userLoged}
            userIsLoged={this.state.userIsLoged}
            userLoged={this.state.userLoged}
            checkUserIsLoged={this.checkUserIsLoged}
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
