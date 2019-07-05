import React, { Component } from 'react';

class CartItem extends Component {
    render(){
        return(
            <div className="cart-product">
                <div className="cart-product-img">
                    <img src="img/products/camisa-polo.jpg" />
                </div>
                <div className="cart-product-info">
                    <div className="cart-product-name">Camisa Polo Seda de Festim com Estampa</div>
                    <div className="cart-product-attributes">
                        <div className="cart-product-size">Tam. P</div>
                        <div className="cart-product-color">Branca</div>
                    </div>
                    <div className="cart-product-quantity">
                        <div className="cart-product-quantity-btn less center">-</div>
                        <div className="cart-product-quantity-number">1</div>
                        <div className="cart-product-quantity-btn plus center">+</div>
                    </div>
                </div>
                <div className="cart-product-aside">
                    <div className="cart-product-remove"><img src="img/svg/close-x.svg" /></div>
                    <div className="cart-product-price">R$ 129,00</div>
                </div>
            </div>
        )
    }
}

export default CartItem;