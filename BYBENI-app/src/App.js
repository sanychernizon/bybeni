import React, { Component } from "react";
import "./App.css";
import "./App-mobile.css";
import { Cart, Menu, Footer, Content, Overlay } from "./components";

class App extends Component {
  constructor() {
    super();
    this.state = {
      menuIsOpen: false,
      carIsOpen: false,
      cartSelectedItems: [
        {
          id: 1,
          name: "BERMUDA LONGA DE PANO",
          price: 89.9,
          category: "bermuda",
          availableSizes: ["P", "M", "G"],
          description:
            "Com bolso embutido, a bermuda chino básica vem em duas opções de cores, viabilizando mais opções de looks para o dia-a-dia. Com bolso embutido, a bermuda chino básica vem em duas opções de cores, viabilizando mais opções de looks para o dia-a-dia.",
          imageURL: [
            "https://res.cloudinary.com/bybeni/image/upload/v1562284335/bermuda-preta_a4xt67.jpg",
            "https://res.cloudinary.com/bybeni/image/upload/v1562284335/jaqueta-couro_fmbtrq.jpg",
            "https://res.cloudinary.com/bybeni/image/upload/v1562284335/camisa-polo_iofbrf.jpg",
            "https://res.cloudinary.com/bybeni/image/upload/v1562284335/calca-jeans_enwihg.jpg"
          ],
          isFeatured: true,
          selectedSize: 'P'
        }
      ]
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

  componentWillMount() {}

  render() {
    return (
      <div className="App">
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
        <Footer />
        <Overlay
          cartIsOpen={this.state.cartIsOpen}
          cartFunc={this.toggleCart}
        />
      </div>
    );
  }
}

export default App;
