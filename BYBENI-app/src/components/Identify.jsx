import React, { Component } from "react";
import { Link } from "react-router-dom";

class Identify extends Component {
  render() {
    return (
      <section className="content-container">
        <div class="login-container">
          <div>Olá! Insira seu email e senha para entrar:</div>
          <input
            class="input-login"
            type="email"
            placeholder="fulanodetal@gmail.com"
          />
          <input class="input-login" type="password" placeholder="**********" />
          <div>
            <input class="btn-checkout" type="submit" value="Entrar" />
          </div>
          <div>
            <Link to="/register">ou Cadastre-se agora!</Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Identify;
