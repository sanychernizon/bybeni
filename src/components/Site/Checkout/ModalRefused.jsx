import React, { Component } from "react";

class ModalRefused extends Component {
  render() {
    return (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#d61212" stroke-width="2" stroke-linecap="square" stroke-linejoin="arcs"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
        <h1>Seu pedido foi recusado.</h1>
        <div className="btn-checkout" onClick={() => this.props.closeModalOrder()}>
          Tentar novamente
        </div>
      </>
    );
  }
}

export default ModalRefused;
