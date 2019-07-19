import React, { Component } from "react";
import { Link } from "react-router-dom";
import CartItem from "./Cart/CartItem";


export class Cart extends Component {

  handleCartToggle = (event) => {
    this.props.cartFunc(event)
  }

  calcTotalPrice = () => {
    return this.props.cartSelectedItems.reduce((acc, value) => acc + parseInt(value.price), 0).toFixed(2)
  }

  render() {
    return (
      <div className={this.props.cartIsOpen ? 'cart-container cart-open' : 'cart-container'}>
        <div className="cart">
          <div className="cart-header">
            <div className="close-cart" onClick={(event) => this.handleCartToggle(event)}>
              <img
                src="https://res.cloudinary.com/bybeni/image/upload/v1562344970/close-x_feir8d.svg"
                alt="x-close-icon"
              />
            </div>
            <div className="cart-title">
              Sacola ({this.props.cartSelectedItems.length})
            </div>
            <div className="cart-help">
              <img
                src="https://res.cloudinary.com/bybeni/image/upload/v1562344970/help-cart_llqfyo.svg"
                alt="help-icon"
              />
            </div>
          </div>
          <div className="cart-body">
            {this.props.cartSelectedItems.map((item, idx) => {
              return <CartItem key={idx} product={item} cartRemoveItemFunc={this.props.cartRemoveItemFunc} />;
            })}
          </div>
          <div className="cart-footer">
            <div className="total-price">
              <div className="total-price-title">Total a pagar:</div>
              <div className="total-price-value">
                R$ {this.calcTotalPrice()}
              </div>
            </div>
            <Link to='/checkout' className="btn-checkout" onClick={(event) => this.handleCartToggle(event)}>
              Ir para o pagamento
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
