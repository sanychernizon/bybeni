import React, { Component } from "react";

class CheckoutCartItem extends Component {
  render() {
    return (
      <div class="cart-product">
        <div class="cart-product-img">
          <img
            src={this.props.product.imageURL[0]}
            alt={this.props.product.name}
          />
        </div>
        <div class="cart-product-info">
          <div class="cart-product-name">{this.props.product.name}</div>
          <div class="cart-product-attributes">
            <div class="cart-product-size">
              Tam. {this.props.product.selectedSize}
            </div>
            <div class="cart-product-color">Branca</div>
          </div>
          <div class="cart-product-quantity">
            <div class="cart-product-quantity-number">Quantidade: 1</div>
          </div>
        </div>
        <div class="cart-product-aside">
          <div />
          <div class="cart-product-price">
            R$ {parseInt(this.props.product.price).toFixed(2)}
          </div>
        </div>
      </div>
    );
  }
}

export default CheckoutCartItem;
