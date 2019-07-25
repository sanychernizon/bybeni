import React, { Component } from "react";
import { Link } from "react-router-dom";
import cep from "cep-promise";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flags: {
        passwordNotEqual: false
      },
      name: "",
      lastName: "",
      email: "",
      cpf: "",
      password: "",
      confirmPassword: "",
      zip: "",
      street: "",
      number: "",
      adjunct: "",
      neighborhood: "",
      city: "",
      state: ""
    };
  }

  registerUser = () => {
    console.log(this.state)
  }

  confirmPassword = () => {
    if(this.state.password !== this.state.confirmPassword) {
      let copyFlags = {...this.state.flags}
      copyFlags.passwordNotEqual = true
      this.setState({flags: copyFlags})
    } else {
      let copyFlags = {...this.state.flags}
      copyFlags.passwordNotEqual = false
      this.setState({flags: copyFlags})
    }
  }

  findZip = event => {
    cep(event.target.value).then(response => {
      this.setState({
        zip: response.cep,
        street: response.street,
        neighborhood: response.neighborhood,
        city: response.city,
        state: response.state
      });
    });
  };

  handleInput = event => {
    switch (event.target.attributes.name.value) {
      case "name":
        return this.setState({ name: event.target.value });
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
      <section className="content-container">
        <div className="register-container">
          <div>Insira algumas informações para criar sua conta :)</div>
          <input
            className="input-login"
            type="text"
            name="name"
            placeholder="Nome"
            onChange={e => this.handleInput(e)}
          />
          <input
            className="input-login"
            type="text"
            name="last-name"
            placeholder="Sobrenome"
            onChange={e => this.handleInput(e)}
          />
          <input
            className="input-login"
            type="email"
            name="email"
            placeholder="Email"
            onChange={e => this.handleInput(e)}
          />
          <input
            className="input-login"
            type="text"
            name="cpf"
            placeholder="CPF"
            onChange={e => this.handleInput(e)}
          />
          <input
            className="input-login"
            type="password"
            name="password"
            placeholder="**********"
            onChange={e => this.handleInput(e)}
          />
          { this.state.flags.passwordNotEqual === true ? <p>As senhas não são iguais*</p> : ""}
          <input
            className={ this.state.flags.passwordNotEqual === true ? "input-login error" : "input-login"}
            type="password"
            name="confirm-password"
            placeholder="**********"
            onChange={e => this.handleInput(e)}
            onBlur={() => this.confirmPassword()}
          />
          <input
            className="input-login"
            type="text"
            name="zip"
            placeholder="CEP"
            onBlur={e => this.findZip(e)}
          />
          <input
            className="input-login"
            type="text"
            name="street"
            placeholder="Rua"
            value={this.state.street}
            onChange={e => this.handleInput(e)}
          />
          <input
            className="input-login"
            type="text"
            name="number"
            placeholder="Numero do Prédio"
            onChange={e => this.handleInput(e)}
          />
          <input
            className="input-login"
            type="text"
            name="adjunct"
            placeholder="Complemento"
            onChange={e => this.handleInput(e)}
          />
          <input
            className="input-login"
            type="text"
            name="neighborhood"
            placeholder="Bairro"
            value={this.state.neighborhood}
            onChange={e => this.handleInput(e)}
          />
          <input
            className="input-login"
            type="text"
            name="city"
            placeholder="Cidade"
            value={this.state.city}
            onChange={e => this.handleInput(e)}
          />
          <input
            className="input-login"
            type="text"
            name="state"
            placeholder="Estado"
            value={this.state.state}
            onChange={e => this.handleInput(e)}
          />
          <div>
            <input className="btn-checkout" type="submit" value="Cadastrar" onClick={() => this.registerUser()} />
          </div>
          <div>
            <Link to="/identify">Já possui conta? Acesse agora.</Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Register;
