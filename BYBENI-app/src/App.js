import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import {
  Cart,
  NavBar,
  Menu,
  Footer,
  ProductList,
  Content
} from './components';

class App extends Component {
  constructor() {
    super()
    this.state = {
      menuIsOpen: false,
      carIsOpen: false,
      cartSelectedItems: [
        {
          id: 1,
          selectedSize: "M",
          quantity: 1
        },
        {
          id: 3,
          selectedSize: "P",
          quantity: 2
        }
      ]
    }
  }

  toggleMenu = (event) => {
    let bool = this.state.menuIsOpen;
    if(event){
      this.setState({menuIsOpen: !bool}) 
    }
  }

  toggleCart(event) {
    let bool = this.state.cartIsOpen;
    if(event){
      this.setState({cartIsOpen: !bool}) 
    }
  }

  render() {
    return (
      <div className="App">
        <Menu isOpen={this.state.menuIsOpen} />
        <Cart cartSelectedItems={this.state.cartSelectedItems} />
        <Content isOpen={this.state.menuIsOpen} funcs={this.toggleMenu} />
        <Footer />
      </div>
    );
  }

}

export default App;
