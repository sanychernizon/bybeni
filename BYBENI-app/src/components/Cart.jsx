import React, { Component } from "react";
import axios from "axios";
import CartItem from "./Cart/CartItem";

export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: this.props.cartSelectedItems,
      products: []
    };
  }

  getProducts = product => {
    let products = [...this.state.products];
    products.push(product);
    this.setState({ products });
  };

  calcTotalPrice = () => {
    return this.state.products.reduce((acc, value) => acc + value.price)
  }

  componentWillMount() {
    let self = this;
    this.state.selectedItems.map(function(item) {
      axios
        .get(`http://localhost:3004/product?id=${item.id}`)
        .then(function(response) {
          self.getProducts(response.data[0]);
          // PROBLEMA COM O BIND!
        })
        .catch(function(error) {
          console.log(error);
        });
    });
  }

  render() {
    console.log(this.state.totalPrice)
    return (
      <div className="cart-container">
        <div className="cart">
          <div className="cart-header">
            <div className="close-cart" onClick={null}>
              <img
                src="https://res.cloudinary.com/bybeni/image/upload/v1562344970/close-x_feir8d.svg"
                alt="x-close-icon"
              />
            </div>
            <div className="cart-title">
              Sacola ({this.state.selectedItems.length})
            </div>
            <div className="cart-help">
              <img
                src="https://res.cloudinary.com/bybeni/image/upload/v1562344970/help-cart_llqfyo.svg"
                alt="help-icon"
              />
            </div>
          </div>
          <div className="cart-body">
            {this.state.products.map((item, idx) => {
              return <CartItem key={idx} product={item} />;
            })}
          </div>
          <div className="cart-footer">
            <div className="total-price">
              <div className="total-price-title">Total a pagar:</div>
              <div className="total-price-value">
                R$ {this.calcTotalPrice()}
              </div>
            </div>
            <a href="checkout.html" className="btn-checkout">
              Ir para o pagamento
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
