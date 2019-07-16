import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <section className="content-container">
        <div class="register-container">
                    <div>Insira algumas informações para criar sua conta :)</div>
                    <input class="input-login" type="text" name="name" placeholder="Nome" />
                    <input class="input-login" type="text" name="last-name" placeholder="Sobrenome" />
                    <input class="input-login" type="email" name="email" placeholder="fulanodetal@gmail.com" />
                    <input class="input-login" type="text" name="cpf" placeholder="CPF" />
                    <input class="input-login" type="password" name="password" placeholder="**********" />
                    <input class="input-login" type="password" name="confirm-password" placeholder="**********" />
                    <div><input class="btn-checkout" type="submit" value="Cadastrar" /></div>
                    <div><a href="/identify">Já possui conta? Acesse agora.</a></div>
                </div>
      </section>
    );
  }
}

export default Register;
