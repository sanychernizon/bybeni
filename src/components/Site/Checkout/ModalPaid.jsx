import React, { Component } from "react";

class ModalPaid extends Component {
  render() {
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#36b323"
          stroke-width="2"
          stroke-linecap="square"
          stroke-linejoin="arcs"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        <h1>Seu pedido foi aprovado!</h1>
        <a className="btn-checkout" href="/">
          Voltar para o site
        </a>
      </>
    );
  }
}

export default ModalPaid;
