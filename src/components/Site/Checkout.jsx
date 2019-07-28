import React, { Component } from "react";
import CheckoutCartItem from "./Cart/CheckoutCartItem";
import Cards from "react-credit-cards";
import { Link } from "react-router-dom";
import axios from "axios";
import ModalPaid from "./Checkout/ModalPaid";
import ModalRefused from "./Checkout/ModalRefused";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoged: this.props.userLoged,
      shippingValue: 0.0,
      cartPrice: parseFloat(
        this.props.cartSelectedItems.reduce(
          (acc, value) => acc + parseInt(value.price),
          0
        )
      ).toFixed(2),
      totalPrice: parseFloat(
        this.props.cartSelectedItems.reduce(
          (acc, value) => acc + parseInt(value.price),
          0
        )
      ).toFixed(2),
      cardNumber: "",
      cardName: "",
      expiry: "",
      cvc: "",
      focused: "",
      installments: "1",
      installmentsValue: "0",
      modalOrderIsOpen: false,
      orderStatus: "processing"
    };
  }

  closeModalOrder = () => {
    this.setState({modalOrderIsOpen: false})
  }

  placeOrder = () => {
    let self = this;
    axios
      .post("http://localhost:3004/api/checkout/order-placed", this.state)
      .then(response => {
        console.log(response.data);
        self.setState(response.data);
        self.setState({ modalOrderIsOpen: true });
      });
  };

  handleTotalPrice = event => {
    this.setState({ shippingValue: event.target.value });
    let cartItems = parseFloat(
      this.props.cartSelectedItems.reduce(
        (acc, value) => acc + parseInt(value.price),
        0
      )
    );
    let totalPrice = (cartItems + parseFloat(event.target.value)).toFixed(2);
    this.setState({ totalPrice: totalPrice });
  };

  handleFocus = event => {
    this.setState({ focused: event.target.attributes.name.value });
  };

  handleBlur = () => {
    this.setState({ focused: "name" });
  };

  handleInput = event => {
    switch (event.target.attributes.name.value) {
      case "number":
        return this.setState({ cardNumber: event.target.value });
      case "name":
        return this.setState({ cardName: event.target.value });
      case "expiry":
        return this.setState({ expiry: event.target.value });
      case "cvc":
        return this.setState({ cvc: event.target.value });
      case "installments":
        return this.setState({
          installments: event.target.value,
          installmentsValue: (
            this.state.totalPrice / event.target.value
          ).toFixed(2)
        });
      default:
        return null;
    }
  };

  render() {
    const { address } = this.props.userLoged;
    return (
      <>
        {
          this.state.modalOrderIsOpen ?
          <div className="modal-order-placed">
            <div className="modal-message">
              {this.state.orderStatus === "paid" ? (
                <ModalPaid />
              ) : (
                <ModalRefused closeModalOrder={this.closeModalOrder}/>
              )}
            </div>
          </div>
          : ""
        }
        <div className="checkout-container">
          <div className="checkout-header">
            <a href="/">
              <img
                className="img-logo"
                src="https://res.cloudinary.com/bybeni/image/upload/v1562344950/logo_h0kavt.png"
                alt="bybeni-logo"
              />
            </a>
          </div>
          <div className="checkout-body">
            <div className="checkout-step">
              <div className="checkout-step-header">
                <h2>Endereço</h2>
              </div>
              <div className="checkout-step-body">
                <div className="shipping-user-address">
                  <h1>Endereço de entrega</h1>
                  <div className="box">
                    <p>
                      {this.props.userLoged.name}{" "}
                      {this.props.userLoged.lastName}
                    </p>
                    <p>
                      {address.street}, {address.number}, {address.adjunct},{" "}
                      {address.neighborhood} -{address.city}/{address.state}
                    </p>
                    <p>CEP: {address.zip}</p>
                    {/* <button>Atualizar Endereço</button> */}
                  </div>
                  <h1>Forma de envio</h1>
                  <form>
                    <label>
                      <input
                        type="radio"
                        name="shipping-method"
                        value="12.30"
                        onChange={e => this.handleTotalPrice(e)}
                      />
                      R$ 12,30 - PAC (3 a 5 dias úteis)
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="shipping-method"
                        value="23.90"
                        onChange={e => this.handleTotalPrice(e)}
                      />
                      R$ 23,90 - SEDEX (até 2 dias úteis)
                    </label>
                  </form>
                </div>
              </div>
              <div className="checkout-step-footer">
                {/* <div className="total-price">
                <div className="total-price-title">Total a pagar:</div>
                <div className="total-price-value"> R$ 230,00</div>
              </div>
              <button className="btn-checkout">Ir para o pagamento</button> */}
              </div>
            </div>
            <label className="checkout-step">
              <div className="checkout-step-header">
                <h2>Pagamento</h2>
              </div>
              <label className="checkout-step-body">
                <div className="credit-card-box">
                  <Cards
                    number={this.state.cardNumber}
                    name={this.state.cardName}
                    expiry={this.state.expiry}
                    cvc={this.state.cvc}
                    focused={this.state.focused}
                    placeholders={{ name: "SEU NOME AQUI" }}
                  />
                </div>
                <label className="payment-credit-card">
                  <label>
                    <label for="number">Número do Cartão</label>
                    <input
                      className="input"
                      name="number"
                      type="text"
                      onFocus={e => this.handleFocus(e)}
                      onChange={e => this.handleInput(e)}
                    />
                  </label>
                  <div>
                    <label for="name">Nome do Titular</label>
                    <input
                      className="input"
                      name="name"
                      type="text"
                      onFocus={e => this.handleFocus(e)}
                      onChange={e => this.handleInput(e)}
                    />
                  </div>
                  <div className="credit-card-info">
                    <div>
                      <label for="expiring">Validade</label>
                      <input
                        className="input"
                        name="expiry"
                        type="text"
                        onFocus={e => this.handleFocus(e)}
                        onChange={e => this.handleInput(e)}
                      />
                    </div>
                    <div>
                      <label for="cvv">CVV</label>
                      <input
                        className="input"
                        name="cvc"
                        type="text"
                        onFocus={e => this.handleFocus(e)}
                        onBlur={() => this.handleBlur()}
                        onChange={e => this.handleInput(e)}
                      />
                    </div>
                  </div>
                  <h1>Parcelamento</h1>
                  <select
                    name="installments"
                    onChange={e => this.handleInput(e)}
                  >
                    <option value="1">
                      1x R$ {this.state.totalPrice} à vista
                    </option>
                    <option value="2">
                      2x R$ {(this.state.totalPrice / 2).toFixed(2)} sem juros
                    </option>
                    <option value="3">
                      3x R$ {(this.state.totalPrice / 3).toFixed(2)} sem juros
                    </option>
                  </select>
                </label>
              </label>
              <div className="checkout-step-footer">
                {/* <div className="total-price">
                <div className="total-price-title">Total a pagar:</div>
                <div className="total-price-value"> R$ 230,00</div>
              </div>
              <button className="btn-checkout">Revisar seu pedido</button> */}
              </div>
            </label>
            <div className="checkout-step">
              <div className="checkout-step-header">
                <h2>Resumo</h2>
              </div>
              <div className="checkout-step-body">
                <div>
                  <h1>{this.props.cartSelectedItems.length} Item(s)</h1>
                </div>
                {this.props.cartSelectedItems.map((item, idx) => {
                  return <CheckoutCartItem key={idx} product={item} />;
                })}
                <h1>Endereço de Entrega</h1>
                <div className="shipping-user-address">
                  <div>
                    <p>
                      {this.props.userLoged.name}{" "}
                      {this.props.userLoged.lastName}
                    </p>
                    <p>
                      {address.street}, {address.number}, {address.adjunct},{" "}
                      {address.neighborhood} -{address.city}/{address.state}
                    </p>
                    <p>CEP: {address.zip}</p>
                  </div>
                </div>
                <h1>Opções de Envio</h1>
                <div className="justify">
                  <span>Frete:</span>
                  <span>R$ {this.state.shippingValue}</span>
                </div>
                <h1>Pagamento</h1>
                <div className="justify">
                  <span>Forma de pagamento:</span>
                  <span>Cartão</span>
                </div>
                <div className="justify">
                  <span>Parcelas:</span>
                  <span>
                    {this.state.installments} x {this.state.installmentsValue}
                  </span>
                </div>
              </div>
              <div className="checkout-step-footer">
                <div className="total-price">
                  <div className="total-price-title">Total a pagar:</div>
                  <div className="total-price-value">
                    R$ {this.state.totalPrice}
                  </div>
                </div>
                <button
                  className="btn-checkout"
                  onClick={() => this.placeOrder()}
                >
                  Finalizar Compra
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Checkout;
