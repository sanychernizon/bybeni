import React, { Component } from 'react';
import axios from 'axios';
import CartItem from './Cart/CartItem'

export class Cart extends Component {

    constructor(props){
        super(props)
        this.state = {
            selectedItems: this.props.cartSelectedItems,
            products: []
        }
    }

    componentDidMount() {
        let products = [];
        this.state.selectedItems.map( function (item) {
            axios.get(`http://localhost:3004/product?id=${item.id}`)
                .then(function (response) {
                    products.push(response.data[0])
                // PROBLEMA COM O BIND!
                })
                .catch(function (error) {
                    console.log(error);
                })
        })
        this.setState({ products }) 
    }

    render(){
        // console.log(this.state.products)
        return(
            <div className="cart-container">
            <div className="cart">
                <div className="cart-header">
                    <div className="close-cart" onClick={null}><img src="img/svg/close-x.svg" /></div>
                    <div className="cart-title">Sacola (x)</div>
                    <div className="cart-help"><img src="img/svg/help-cart.svg" /></div>
                </div>
                <div className="cart-body">

                    <CartItem />

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
                </div>
                <div className="cart-footer">
                    <div className="total-price">
                        <div className="total-price-title">Total a pagar:</div>
                        <div className="total-price-value"> R$ 230,00</div>
                    </div>
                    <a href="checkout.html" className="btn-checkout">Ir para o pagamento</a>
                </div>
            </div>
        </div>
        )
    }
}

export default Cart;