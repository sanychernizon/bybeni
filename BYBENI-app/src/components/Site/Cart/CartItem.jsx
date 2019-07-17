import React, { Component } from "react";

class CartItem extends Component {
  handleRemoveCartItem = () => {
    this.props.cartRemoveItemFunc(this.props.product.id);
  };

  render() {
    return (
      <div className="cart-product">
        <div className="cart-product-img">
          <img
            src={this.props.product.imageURL[0]}
            alt={this.props.product.name}
          />
        </div>
        <div className="cart-product-info">
          <div className="cart-product-name">{this.props.product.name}</div>
          <div className="cart-product-attributes">
            <div className="cart-product-size">
              Tam. {this.props.product.selectedSize}
            </div>
            <div className="cart-product-color">Branca</div>
          </div>
          <div className="cart-product-quantity">
            <div className="cart-product-quantity-btn less center">-</div>
            <div className="cart-product-quantity-number">1</div>
            <div className="cart-product-quantity-btn plus center">+</div>
          </div>
        </div>
        <div className="cart-product-aside">
          <div
            className="cart-product-remove"
            onClick={() => this.handleRemoveCartItem()}
          >
            <img
              src="https://res.cloudinary.com/bybeni/image/upload/v1562344970/close-x_feir8d.svg"
              alt="x-close-icon"
            />
          </div>
          <div className="cart-product-price">
            R$ {this.props.product.price.toFixed(2)}
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
