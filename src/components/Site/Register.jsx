import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import cep from "cep-promise";
import api from "../../services/api"

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flags: {
        passwordIsEqual: true,
        registerIsValid: false,
        alreadyRegister: false,
        isRegister: false
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
    let user = { ...this.state };
    let copyFlags = { ...this.state.flags };
    let self = this
    api
      .post("/api/user/register", user)
      .then(function(response) {
        if(Object.keys(response.data)[0] === 'alreadyRegister'){
          copyFlags.alreadyRegister = response.data.alreadyRegister
          self.setState({ flags: copyFlags })
        }
        if(Object.keys(response.data)[0] === 'isRegister'){
          copyFlags.isRegister = response.data.isRegister
          self.setState({ flags: copyFlags })
          self.props.isRegister(true)
        }
        // this.setState({ flags: copyFlags})
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  confirmPassword = () => {
    if (this.state.password === this.state.confirmPassword) {
      let copyFlags = { ...this.state.flags };
      copyFlags.passwordIsEqual = true;
      this.setState({ flags: copyFlags });
    } else {
      let copyFlags = { ...this.state.flags };
      copyFlags.passwordIsEqual = false;
      this.setState({ flags: copyFlags });
    }
  };

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

  validate = () => {
    if (
      this.state.name &&
      this.state.lastName &&
      this.state.email &&
      this.state.cpf &&
      this.state.password &&
      this.state.zip &&
      this.state.street &&
      this.state.number &&
      this.state.neighborhood &&
      this.state.city &&
      this.state.state !== "" &&
      this.state.flags.passwordIsEqual === true
    ) {
      let copyFlags = { ...this.state.flags };
      copyFlags.registerIsValid = true;
      this.setState({ flags: copyFlags });
    } else {
      let copyFlags = { ...this.state.flags };
      copyFlags.registerIsValid = false;
      this.setState({ flags: copyFlags });
    }
    console.log(this.state.flags.registerIsValid);
  };

  handleInput = event => {
    switch (event.target.attributes.name.value) {
      case "name":
        this.setState({ name: event.target.value });
        this.validate();
        break;
      case "last-name":
        this.setState({ lastName: event.target.value });
        this.validate();
        break;
      case "email":
        this.setState({ email: event.target.value });
        this.validate();
        break;
      case "cpf":
        this.setState({ cpf: event.target.value });
        this.validate();
        break;
      case "password":
        this.setState({ password: event.target.value });
        this.validate();
        break;
      case "confirm-password":
        this.setState({ confirmPassword: event.target.value });
        this.validate();
        break;
      case "street":
        this.setState({ street: event.target.value });
        this.validate();
        break;
      case "number":
        this.setState({ number: event.target.value });
        this.validate();
        break;
      case "adjunct":
        this.setState({ adjunct: event.target.value });
        this.validate();
        break;
      case "neighborhood":
        this.setState({ neighborhood: event.target.value });
        this.validate();
        break;
      case "city":
        this.setState({ city: event.target.value });
        this.validate();
        break;
      case "state":
        this.setState({ state: event.target.value });
        this.validate();
        break;
      default:
        return null;
    }
  };

  render() {
    return (
      <section className="content-container">
        {
          this.state.flags.isRegister ?
          <Redirect to={{pathname: '/identify',}} /> : ''
        }
        <div className="register-container">
          <div>Insira algumas informações para criar sua conta :)</div>
          <input
            className="input-login"
            type="text"
            name="name"
            placeholder="Nome"
            onChange={e => this.handleInput(e)}
            onBlur={() => this.validate()}
          />
          <input
            className="input-login"
            type="text"
            name="last-name"
            placeholder="Sobrenome"
            onChange={e => this.handleInput(e)}
          />
          {this.state.flags.alreadyRegister === true ? (
            <p>CPF já cadastrado*</p>
          ) : (
            ""
          )}
          <input
            className={
              this.state.flags.alreadyRegister === true
                ? "input-login error"
                : "input-login"
            }
            type="text"
            name="cpf"
            placeholder="CPF"
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
            type="password"
            name="password"
            placeholder="**********"
            onChange={e => this.handleInput(e)}
          />
          {this.state.flags.passwordIsEqual === false ? (
            <p>As senhas não são iguais*</p>
          ) : (
            ""
          )}
          <input
            className={
              this.state.flags.passwordIsEqual === false
                ? "input-login error"
                : "input-login"
            }
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
            onBlur={() => this.validate()}
          />
          <div>
            <input
              className={
                this.state.flags.registerIsValid
                  ? "btn-checkout"
                  : "btn-checkout-inactive"
              }
              type="submit"
              value="Cadastrar"
              onClick={
                this.state.flags.registerIsValid
                  ? () => this.registerUser()
                  : null
              }
            />
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
