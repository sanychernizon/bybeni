import React, { Component } from "react";

class Orders extends Component {
  render() {
    return (
      <div className="center-column">
        <h1 className="title is-4">Orders</h1>
        {/* <div className="search-bar center">
          <input className="input" type="text" placeholder="Search order" />
          <div className="select">
            <select>
              <option>ID</option>
              <option>Status</option>
              <option>Cliente</option>
            </select>
          </div>
        </div> */}
        <table className="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th><abbr title="ID">#</abbr></th>
              <th>Status</th>
              <th>Data</th>
              <th>Cliente</th>
              <th>Pagamento</th>
              <th>Envio</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>4</th>
              <td><span className="tag is-success">Aprovado</span></td>
              <td>05/10/2019</td>
              <td>Sany Chernizon</td>
              <td>Cartão de Crédito</td>
              <td>SEDEX</td>
              <td>R$ 178,90</td>
            </tr>
            <tr>
              <th>3</th>
              <td><span className="tag is-warning">Aguardando Pagamento</span></td>
              <td>25/09/2019</td>
              <td>João Carvalho</td>
              <td>Boleto</td>
              <td>PAC</td>
              <td>R$ 68,00</td>
            </tr>
            <tr>
              <th>2</th>
              <td><span className="tag is-danger">Cancelado</span></td>
              <td>14/09/2019</td>
              <td>Frederico Conti</td>
              <td>Cartão de Crédito</td>
              <td>PAC</td>
              <td>R$ 231,15</td>
            </tr>
            <tr>
              <th>1</th>
              <td><span className="tag is-light">Pendente</span></td>
              <td>02/09/2019</td>
              <td>Amanda Martins dos Santos</td>
              <td>Boleto</td>
              <td>PAC</td>
              <td>R$ 71,00</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Orders;
