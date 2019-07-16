import React, { Component } from "react";
import CheckoutCartItem from "./Cart/CheckoutCartItem";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  calcTotalPrice = () => {
    return this.props.cartSelectedItems
      .reduce((acc, value) => acc + value.price, 0)
      .toFixed(2);
  };

  render() {
    console.log(this.props);
    return (
      <div class="checkout-container">
        <div class="checkout-header">
          <a href="app.html">
            <img src="img/logo.png" />
          </a>
        </div>
        <div class="checkout-body">
          <div class="checkout-step">
            <div class="checkout-step-header">
              <h2>Endereço</h2>
            </div>
            <div class="checkout-step-body">
              <div class="shipping-user-address">
                <h1>Endereço de entrega</h1>
                <div class="box">
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
            <div class="checkout-step-footer">
              {/* <div class="total-price">
                <div class="total-price-title">Total a pagar:</div>
                <div class="total-price-value"> R$ 230,00</div>
              </div>
              <button class="btn-checkout">Ir para o pagamento</button> */}
            </div>
          </div>
          <div class="checkout-step">
            <div class="checkout-step-header">
              <h2>Pagamento</h2>
            </div>
            <div class="checkout-step-body">
              <h1>Forma de pagamento</h1>
              <div class="payment">
                <button class="btn-payment-method">Cartão</button>
                <button class="btn-payment-method">Boleto</button>
              </div>
              <div class="payment-credit-card">
                <form>
                  <label for="card-number">Número do Cartão</label>
                  <input name="card-number" type="text" />
                  <label for="card-user">Nome do Titular</label>
                  <input name="card-user" type="text" />
                  <div class="credit-card-info">
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
                </form>
              </div>
            </div>
            <div class="checkout-step-footer">
              {/* <div class="total-price">
                <div class="total-price-title">Total a pagar:</div>
                <div class="total-price-value"> R$ 230,00</div>
              </div>
              <button class="btn-checkout">Revisar seu pedido</button> */}
            </div>
          </div>
          <div class="checkout-step">
            <div class="checkout-step-header">
              <h2>Resumo</h2>
            </div>
            <div class="checkout-step-body">
              <div>
                <h1>{this.props.cartSelectedItems.length} Item(s)</h1>
              </div>
              {this.props.cartSelectedItems.map((item, idx) => {
                return <CheckoutCartItem key={idx} product={item} />;
              })}
              <h1>Endereço de Entrega</h1>
              <div class="shipping-user-address">
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
              <div class="justify">
                <span>Frete:</span>
                <span>SEDEX (até 2 dias úteis) - R$ 23,90</span>
              </div>
              <h1>Pagamento</h1>
              <div class="justify">
                <span>Forma de pagamento:</span>
                <span>Cartão</span>
              </div>
              <div class="justify">
                <span>Parcelas:</span>
                <span>3</span>
              </div>
            </div>
            <div class="checkout-step-footer">
              <div class="total-price">
                <div class="total-price-title">Total a pagar:</div>
                <div class="total-price-value"> R$ {this.calcTotalPrice()}</div>
              </div>
              <button class="btn-checkout">Finalizar Compra</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
