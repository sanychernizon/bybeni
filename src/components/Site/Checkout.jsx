import React, { Component } from "react";
import CheckoutCartItem from "./Cart/CheckoutCartItem";
import Cards from "react-credit-cards";
import { Link } from "react-router-dom";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shippingMethod: 0,
      totalPrice: parseFloat(this.props.cartSelectedItems.reduce((acc, value) => acc + parseInt(value.price),0)).toFixed(2),

    };
  }

  handleTotalPrice = event => {
    this.setState({ shippingMethod: event.target.value });
    let cartItems = parseFloat(this.props.cartSelectedItems.reduce((acc, value) => acc + parseInt(value.price),0))
    let totalPrice = (cartItems + parseFloat(event.target.value)).toFixed(2)
    this.setState({ totalPrice: totalPrice });
  };

  handleInput = event => {
    switch (event.target.attributes.name.value) {
      case "shipping-method":
        return this.setState({ shippingMethod: event.target.value });
      case "last-name":
        return this.setState({ lastName: event.target.value });
      case "email":
        return this.setState({ email: event.target.value });
      case "cpf":
        return this.setState({ cpf: event.target.value });
      case "password":
        return this.setState({ password: event.target.value });
      case "confirm-password":
        return this.setState({ confirmPassword: event.target.value });
      case "street":
        return this.setState({ street: event.target.value });
      case "number":
        return this.setState({ number: event.target.value });
      case "adjunct":
        return this.setState({ adjunct: event.target.value });
      case "neighborhood":
        return this.setState({ neighborhood: event.target.value });
      case "city":
        return this.setState({ city: event.target.value });
      case "state":
        return this.setState({ state: event.target.value });
      default:
        return null;
    }
  };

  render() {
    return (
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
                  <p>Sany Chernizon</p>
                  <p>
                    Rua Emilio de Souza Arantes, 1253, apto 91, Santa Cecília -
                    São Paulo/SP
                  </p>
                  <p>CEP: 01233-010</p>
                  <button>Atualizar Endereço</button>
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
                <Cards number="4901199249924992" />
              </div>
              <label className="payment-credit-card">
                <label>
                  <label for="card-number">Número do Cartão</label>
                  <input className="input" name="card-number" type="text" />
                </label>
                <div>
                  <label for="card-user">Nome do Titular</label>
                  <input className="input" name="card-user" type="text" />
                </div>
                <div className="credit-card-info">
                  <div>
                    <label for="card-number">Validade</label>
                    <input className="input" name="card-number" type="text" />
                  </div>
                  <div>
                    <label for="card-number">CVV</label>
                    <input className="input" name="card-number" type="text" />
                  </div>
                </div>
                <h1>Parcelamento</h1>
                <select name="installments">
                  <option>1x R$ 209,90 à vista</option>
                  <option>2x R$ 104,95 sem juros</option>
                  <option>3x R$ 69,97 sem juros</option>
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
                  <p>Sany Chernizon</p>
                  <p>
                    Rua Emilio de Souza Arantes, 1253, apto 91, Santa Cecília -
                    São Paulo/SP
                  </p>
                  <p>CEP: 01233-010</p>
                </div>
              </div>
              <h1>Opções de Envio</h1>
              <div className="justify">
                <span>Frete:</span>
                <span>SEDEX (até 2 dias úteis) - R$ 23,90</span>
              </div>
              <h1>Pagamento</h1>
              <div className="justify">
                <span>Forma de pagamento:</span>
                <span>Cartão</span>
              </div>
              <div className="justify">
                <span>Parcelas:</span>
                <span>3</span>
              </div>
            </div>
            <div className="checkout-step-footer">
              <div className="total-price">
                <div className="total-price-title">Total a pagar:</div>
                <div className="total-price-value">
                  R$ {this.state.totalPrice}
                </div>
              </div>
              <button className="btn-checkout">Finalizar Compra</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
