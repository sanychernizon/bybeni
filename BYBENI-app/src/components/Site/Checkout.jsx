import React, { Component } from "react";
import CheckoutCartItem from "./Cart/CheckoutCartItem";
import Cards from "react-credit-cards";
import { Link } from "react-router-dom";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  calcTotalPrice = () => {
    return this.props.cartSelectedItems
      .reduce((acc, value) => acc + parseInt(value.price), 0)
      .toFixed(2);
  };

  render() {
    console.log(this.props);
    return (
      <label className="checkout-container">
        <div className="checkout-header">
          <Link to="/">
            <img
              className="img-logo"
              src="https://res.cloudinary.com/bybeni/image/upload/v1562344950/logo_h0kavt.png"
              alt="bybeni-logo"
            />
          </Link>
        </div>
        <label className="checkout-body">
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
                    <input type="radio" name="shipping-method" />
                    R$ 12,30 - PAC (3 a 5 dias úteis)
                  </label>
                  <label>
                    <input type="radio" name="shipping-method" />
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
                  <input name="card-user" type="text" />
                </div>
                <div className="credit-card-info">
                  <div>
                    <label for="card-number">Validade</label>
                    <input name="card-number" type="text" />
                  </div>
                  <div>
                    <label for="card-number">CVV</label>
                    <input name="card-number" type="text" />
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
                  {" "}
                  R$ {this.calcTotalPrice()}
                </div>
              </div>
              <button className="btn-checkout">Finalizar Compra</button>
            </div>
          </div>
        </label>
      </label>
    );
  }
}

export default Checkout;
