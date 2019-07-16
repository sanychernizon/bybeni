import React, { Component } from "react";

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
            <a href="/register">ou Cadastre-se agora!</a>
          </div>
        </div>
      </section>
    );
  }
}

export default Identify;
