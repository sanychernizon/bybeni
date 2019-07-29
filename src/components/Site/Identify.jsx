import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Identify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      userPassword: "",
      incorrectPassword: false
    };
  }

  handleInput = event => {
    switch (event.target.attributes.name.value) {
      case "email":
        return this.setState({ userEmail: event.target.value });
      case "password":
        return this.setState({ userPassword: event.target.value });
      default:
        return null;
    }
  };

  handleUserLoged = user => {
    this.props.userLogedFunc(user);
  };

  loginUser = () => {
    let self = this;
    axios
      .post("https://bybeni-back.herokuapp.com/api/user/login", this.state)
      .then(function(response) {
        if (response.statusText === "incorrect") {
          self.setState(response.data);
        } else {
          self.handleUserLoged(response.data);
          self.setState({ incorrectPassword: false });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <section className="content-container">
        <div className="login-container">
          {this.props.isRegister ? (
            <div>Usuário cadastrado com sucesso! Você já pode logar:</div>
          ) : (
            <div>Olá! Insira seu email e senha para entrar:</div>
          )}
          <input
            className="input-login"
            type="text"
            name="email"
            placeholder="Email"
            onChange={e => this.handleInput(e)}
          />
          {this.state.incorrectPassword ? <p>Senha incorreta!</p> : ''}
          <input
            className={
              this.state.incorrectPassword ? "input-login error" : "input-login"
            }
            type="password"
            name="password"
            placeholder="**********"
            onChange={e => this.handleInput(e)}
          />
          <div>
            <input
              className="btn-checkout"
              type="submit"
              value="Entrar"
              onClick={() => this.loginUser()}
            />
          </div>
          {this.props.isRegister ? (
            ""
          ) : (
            <div>
              <Link to="/register">ou Cadastre-se agora!</Link>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default Identify;
